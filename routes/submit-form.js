const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const user = "info@illumbk.com";
const host = "mail.privateemail.com";
const auth = { user, pass: "!QAZxcvbnm,./" };
const to = "funwiche.dev@gmail.com";
router.post("", async (req, res) => {
  try {
    let { name, email, phone, message, subject } = req.body;
    subject = subject || "Contact us";
    const from = `"${name}" <${user}>`;
    const html = ` 
    <div style="font-size:14px;margin-bottom:8px;"><strong>Full name:</strong> ${name}</div>
    <div style="font-size:14px;margin-bottom:8px;"><strong>Phone Number:</strong> ${phone}</div>
    <div style="font-size:14px;margin-bottom:8px;"><strong>Email Address: </strong>${email}</div>
    <div style="font-size:14px;margin-bottom:8px;"><strong>Message: </strong>${message}</div>`;
    await nodemailer
      .createTransport({ host, port: 465, secure: true, auth })
      .sendMail({ from, to, replyTo: email, subject, html });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
