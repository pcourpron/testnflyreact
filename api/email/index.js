const nodemailer = require("nodemailer");
const router = require("express").Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "testnfly@gmail.com",
    pass: "Courpron1963", // naturally, replace both with your real credentials or an application-specific password
  },
});

router.post("/email", (req, res) => {
  let { email, message, first, last } = req.body;

  const mailOptions = {
    from: "testnfly@gmail.com",
    to: "hcourpron@gmail.com",
    subject: `Contact us test n fly - ${email} , ${first} ${last}`,
    text: message,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
});

module.exports = router;
