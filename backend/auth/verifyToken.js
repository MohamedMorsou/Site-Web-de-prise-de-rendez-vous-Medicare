import jwt, { decode } from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = (req, res, next) => {
  // get token from header

  const authToken = req.headers.authorization;

  //check the token
  if (!authToken || !authToken.startWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "No token provided, authorization denied",
    });
  }

  try {
    const token = authToken.split(" ")[1];

    //very token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userID = decoded.id;
    req.role = decoded.role;
    next(); //must be call the next function
  } catch (error) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired, authorization denied",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid token, authorization denied",
    });
  }
};

export const restrict = (roles) => async (req, res, next) => {
    const userId = req.userId;

    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    if(patient) {
        user = patient
    }

    if(doctor)  {
        user = doctor
    }

    if(!roles.includes(user.role)) {
        return res.status(401).json({
            success: false,
            message: "You're not authorized"
        })
    }

    next();
};
