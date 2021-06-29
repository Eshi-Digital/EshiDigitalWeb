const admin = require("../config/firebase-config");

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
exports.verifyUser = async (req, res, next) => {
  try {
    let token = null;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    // if (!token) {
    //   res.status(401).json({
    //     status: "error",
    //     message: "You are not logged in",
    //   });
    // }

    try {
      const decodeValue = await admin.auth().verifyIdToken(token);
      if (decodeValue) {
        req.user = decodeValue;
        return next();
      }
    } catch (err) {
      return res.json({ message: "Un authorized user" });
    }
  } catch (err) {
    return res.json({ message: "Internal Error" });
  }
};
