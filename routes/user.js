const express = require("express");
const router = express.Router();

router.get("/current", (req, res) => {
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/landing");
});

module.exports = router;
