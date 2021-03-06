const { GoogleSpreadsheet } = require("google-spreadsheet");

export const buildDoc = async () => {
  const doc = new GoogleSpreadsheet(
    process.env.SHEET_ID || "1Zr6VTp2rZeRDhESzsZhWQHALoReQVxwwnH56AwWBHhU"
  );

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
  });

  return doc;
};

export const addAction = async (doc, crsid, action) => {
  const sheetId = doc.sheetsByTitle["Actions"]._rawProperties.sheetId;
  const sheet = doc.sheetsById[sheetId];

  await sheet.addRow({
    date: new Date(),
    crsid,
    action,
  });
};

const updateSheet = async (doc, sheetTitle, crsid) => {
  const sheetId = doc.sheetsByTitle[sheetTitle]._rawProperties.sheetId;
  const sheet = doc.sheetsById[sheetId];
  const rows = await sheet.getRows();

  for (let i = 0; i < rows.length; i++) {
    if (rows[i].crsid === crsid) {
      rows[i].emailVerified = true;
      await rows[i].save();

      break;
    }
  }
};

export const verifyUserEmail = async (crsid, signupType) => {
  const doc = await buildDoc();
  await doc.loadInfo();

  if (signupType.toLowerCase() === "dating") {
    console.log("Updating Dating User");
    updateSheet(doc, "Dating", crsid);
  } else {
    console.log("Updating Friending User");
    updateSheet(doc, "Friending", crsid);
  }
};
