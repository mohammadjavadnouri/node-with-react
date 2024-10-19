const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//const Mailer = require("../services/Mailer");
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const keys = require("../config/keys");
//const surveyTemplate = require("../services/emailTemplates/surveyTemplate");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Survey = mongoose.model("surveys");

router.post("", requireLogin, requireCredits, (req, res, next) => {
  const { title, body, subject, recipients } = req.body;

  const arrOfObjsRecepients = recipients?.map((i) => ({ email: i }));
  console.log("arrOfObjsRecepients mj", arrOfObjsRecepients);

  const survey = new Survey({
    title,
    subject,
    body,
    recipients: arrOfObjsRecepients,
    _user: req.user.id,
    dateSent: Date.now(),
  });

  // Great place to send an email!
  // const mailer = new Mailer(survey, surveyTemplate(survey));
  // mailer.send();

  // const msg = {
  //   to: "nouri_mj@yahoo.com", // Change to your recipient
  //   from: "maji.kaji2@gmail.com", // Change to your verified sender
  //   defaulFrom: "maji.kaji2@gmail.com",
  //   subject: "Sending with SendGrid is Fun mjn",
  //   text: "and easy to do anywhere, even with Node.js mjn",
  //   html: "<strong>and easy to do anywhere, even with Node.js mjn</strong>",
  // };

  // sgMail
  //   .send(msg)
  //   .then((response) => {
  //     console.log("MAIL success mj :) ", response);
  //     res.send(response);
  //     console.log(response[0].statusCode);
  //     console.log(response[0].headers);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     const err = new Error(error);
  //     err.statusCode = error.code;
  //     err.data = error.response;
  //     next(err);
  //   });

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mjdevjs@gmail.com",
      pass: keys?.nodeMailerEmailPassKey,
    },
  });

  var mailOptions = {
    from: "mjdevjs@gmail.com",
    to: recipients,
    subject: subject,
    body: body,
  };

  transporter.sendMail(mailOptions, async function (error, info) {
    if (error) {
      console.log(error);
      const err = new Error(error);
      err.statusCode = error.code;
      err.data = error.response;
      next(err);
    } else {
      await survey.save();
      req.user.credits -= 5;
      const user = await req.user.save();
      res.status(200).json({
        message: "ایمیل درخواستی شما با موفقیت ارسال گردید",
        user: user,
      });
    }
  });
});

router.get("/all", requireLogin, (req, res, next) => {
  console.log("req?.user?._id mj", req?.user?._id?.toString());
  const userId = req?.user?._id?.toString();
  Survey.find({ _user: userId }).then((survey) => {
    res.send(survey);
  });
});

module.exports = router;
