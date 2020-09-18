import { buildDoc, addAction } from "../../common/gsheets";
import { sendVerificationEmail } from "../../common/verification";

const addUnverifiedFriendingUser = async (user) => {
  const doc = await buildDoc();

  await doc.loadInfo();

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
  await addAction(req.body.crsid, "Friending sign up");
  await addUnverifiedFriendingUser(req.body);
  sendVerificationEmail(req.body.crsid);

  res.statusCode = 200;
  res.json({ msg: "All gucciiiii" });
};
