var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

function sendEmail(htmlData, email) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fgrgec8@gmail.com",
      pass: "fgrgecgmail111"
    }
  });
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  var mainOptions = {
    from: email,
    replyTo: email,
    to: "mum19928@outlook.com",
    subject: "TEST",
    text: `We're hoping meet you soon...`,
    html: htmlData
  };
  transporter.sendMail(mainOptions, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Message sent: " + info.response);
    }
  });
}

router.post("/submitMortgage", function(req, res, next) {
  var formData = req.body;
  let htmlData = "";
  for (let each in formData) {
    console.log(each);
    htmlData +=
      "<div style = 'margin:10px;padding:10px;font-size:16px'>" +
      each +
      ":" +
      formData[each] +
      "</div>";
  }
  sendEmail(htmlData, formData.email);
  var data = {};
  data["value"] = "abc";
  res.send(data);
});

module.exports = router;
