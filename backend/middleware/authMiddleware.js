const jwt = require("jsonwebtoken");

module.exports = () => (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // ensures req.user.id exists
    next();
  } catch {
    return res.status(403).json({ msg: "Invalid Token" });
  }
};
