const requireCredits = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: "اعتبار حساب شما ناکافی است" });
  }
  next();
};

module.exports = requireCredits;
