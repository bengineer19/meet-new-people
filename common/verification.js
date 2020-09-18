import crypto from "crypto";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const getCRSIDHash = (crsid) => {
  return crypto.createHash("md5").update(`mmmSalty${crsid}`).digest("hex");
};

export const sendVerificationEmail = (crsid) => {
  const verifHash = getCRSIDHash(crsid);

  const verifLink = `http://meetnewpeople.cam/verify/${crsid}?auth=${verifHash}`;

  console.log(`Emailing ${crsid}@cam.ac.uk`);
  const verifEmail = {
    to: `${crsid}@cam.ac.uk`,
    from: "verification@meetnewpeople.cam",
    subject: "Meet new people - verify your cam.ac.uk email",
    text: `Please verify your email by visiting this link: ${verifLink}`,
    html: `Please verify your email by visiting this link: <a href="${verifLink}">${verifLink}</a>`,
  };

  sgMail.send(verifEmail);
};
