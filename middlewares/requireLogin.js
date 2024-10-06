const requireLogin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "لطفا وارد شوید" });
  }
  next();
};

module.exports = requireLogin;
