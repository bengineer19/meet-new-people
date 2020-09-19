import { buildDoc, addAction } from "../../common/gsheets";
import { sendVerificationEmail } from "../../common/verification";

const buildUserFromForm = (form) => {
  return {
    name: form.name,
    crsid: form.crsid,
    yearOfBirth: form.yearOfBirth,
    college: form.college,
    excludeCollege: form.excludeCollege,
    contact: form.contact,

    isMale: form.male || form.maleNb,
    isFemale: form.female || form.femaleNb,
    nb: form.nb,

    interestedInMale: form.interestedInMale,
    interestedInFemale: form.interestedInFemale,
  };
};

const addUnverifiedDatingUser = async (user) => {
  const doc = await buildDoc();

  await doc.loadInfo();

  const sheetId = doc.sheetsByTitle["Dating"]._rawProperties.sheetId;
  const sheet = doc.sheetsById[sheetId];
  const rows = await sheet.getRows();

  for (let i = 0; i < rows.length; i++) {
    if (rows[i].crsid === user.crsid) {
      // Merge new data (if conflicts, new signup takes preference)
      const mergedRow = { ...rows[i], ...user };
      await rows[i].delete();
      await sheet.addRow(mergedRow);

      return;
    }
  }
  // If they don't already exist, add 'em
  await sheet.addRow(user);
};

export default async (req, res) => {
  const user = buildUserFromForm(req.body);
  console.log("Adding action...");
  await addAction(req.body.crsid, "Dating sign up");
  console.log("Adding user...");
  await addUnverifiedDatingUser(user);
  console.log("Sending email...");
  sendVerificationEmail(req.body.crsid, "Dating");
  console.log("Sent email");

  res.statusCode = 200;
  res.json({ msg: "All gucciiiii" });
};
