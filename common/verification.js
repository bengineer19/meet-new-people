import crypto from "crypto";
import mailgun from "mailgun-js";

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: "meetnewpeople.cam",
  host: "api.eu.mailgun.net",
});

export const getCRSIDHash = (crsid) => {
  return crypto.createHash("md5").update(`mmmSalty${crsid}`).digest("hex");
};

export const sendVerificationEmail = (crsid, signupType) => {
  const verifHash = getCRSIDHash(crsid);

  const verifLink = `http://meetnewpeople.cam/verify/${crsid}?signupType=${signupType}&auth=${verifHash}`;

  console.log(`Emailing ${crsid}@cam.ac.uk`);

  const verifMail = {
    from: "Meet New People <verif@meetnewpeople.cam>",
    to: `${crsid}@cam.ac.uk`,
    subject: `Confirm ${signupType} sign up`,
    text: `Please verify your email by visiting this link: ${verifLink}`,
    html: `Thanks for signing up! <br></br> Please verify your email by visiting this link: <a href="${verifLink}">${verifLink}</a>`,
  };

  mg.messages().send(verifMail, function (error, body) {
    console.log(body);
    console.log(error);
  });
};
