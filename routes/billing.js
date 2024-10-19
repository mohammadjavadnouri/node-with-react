const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const express = require("express");
const requireLogin = require("../middlewares/requireLogin");
const router = express.Router();

router.post("", requireLogin, async (req, res, next) => {
  const charge = await stripe.charges.create({
    amount: 500,
    currency: "usd",
    description: "$5 for 5 credits",
    source: req.body?.id,
  });
  req.user.credits += 5;
  const user = await req.user.save();
  //   res
  //     .status(200)
  //     .json({ message: "تبریک میگم تخمی جان، اعتبار حسابت بیشتر شد" });
  res.send(user);
});

module.exports = router;
