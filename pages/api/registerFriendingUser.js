import { buildDoc, addAction } from "../../common/gsheets";
import { sendVerificationEmail } from "../../common/verification";

const addUnverifiedFriendingUser = async (doc, user) => {
  const sheetId = doc.sheetsByTitle["Friending"]._rawProperties.sheetId;
  const sheet = doc.sheetsById[sheetId];
  const rows = await sheet.getRows();

  let userExists = false;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].crsid === user.crsid) {
      // Merge new data (if conflicts, new signup takes preference)
      const mergedRow = { ...rows[i], ...user };
      await rows[i].delete();
      await sheet.addRow(mergedRow);

      userExists = true;
      break;
    }
  }
  if (!userExists) {
    sheet.addRow(user);
  }
};

export default async (req, res) => {
  const doc = await buildDoc();
  await doc.loadInfo();

  console.log("Adding action...");
  await addAction(doc, req.body.crsid, "Friending sign up");
  console.log("Adding user...");
  await addUnverifiedFriendingUser(doc, req.body);
  console.log("Sending email...");
  sendVerificationEmail(req.body.crsid, "Friending");
  console.log("Sent email");

  res.statusCode = 200;
  res.json({ msg: "All gucciiiii" });
};
