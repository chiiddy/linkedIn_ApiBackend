import jwt from "jsonwebtoken";
import User from "../models/User.js";
import config from "../config/index.js"


const isLoggedIn = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "Invalid token configuation" });
    }
    const bearerHearder = authHeader.split(" ")[1];
    // decrypt the token
    if (bearerHearder != "") {
      const decodedToken = jwt.verify(bearerHearder, config.jwtSecret);
      const user = await User.findOne({ publicId: decodedToken.publicId });
      if (!user)
        return res.status(403).json({ message: "Login Reqired" });

      res.locals.userCredential = user;
      next();
      // console.log(user, " User");
    } else {
      return res.status(403).json({ message: "Login Reqired" });
    }
  }
  catch(e) {
    return res.status(401).json({ message: "User not authorized" });
  }
};


export default isLoggedIn