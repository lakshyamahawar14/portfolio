import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  host: "smtp.mail.fastmail.com",
  port: 465,
  service: "fastmail",
  secure: false,
  auth: {
    user: email,
    pass: password,
  },
  debug: false,
  logger: true,
});

export const mailOptions = {
  from: email,
  to: email,
};
