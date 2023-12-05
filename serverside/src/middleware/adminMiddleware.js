const { createResponse } = require("../utilities");

function adminMiddleware(req, res, next) {
  try {
    const authHeader = req.headers["Authorization"];
    const token = authHeader.split("Bearer ")[1];
    /** @type {{id: string, isAdmin: boolean} | null} */ // This is a uniqe comment for comment the type of the decode object
    const decoded = decodeToken(token);
    if (!decoded.isAdmin) {
      throw new Error("Unauthorized request");
    }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json(createResponse(null, 401, error));
  }
}
module.exports = adminMiddleware;
