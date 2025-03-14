import nodemailer from "nodemailer";

const email = import.meta.env.VITE_MAIL_USERNAME;
const password = import.meta.env.VITE_MAIL_PASSWORD;
console.log("Email", email);
console.log("Pass", password);
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});
