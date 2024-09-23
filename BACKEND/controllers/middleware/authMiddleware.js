// const asyncHandler = require("express-async-handler");
// const User = require("../model/user");
// const jwt = require("jsonwebtoken");

// const protect = asyncHandler(async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       res.status(401);
//       throw new Error("Not authorized, please login");
//     }

//     // Verify token
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     // Get user id from token
//     const user = await User.findById(verified.id).select("-password");

//     if (!user) {
//       res.status(404);
//       throw new Error("User not found");
//     }
//     if (user.role === "suspended") {
//       res.status(400);
//       throw new Error("User suspended, please contact support");
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401);
//     throw new Error("Not authorized, please login");
//   }
// });



// module.exports = {
//   protect,
  
// };
const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) => {
  // Check for token in cookies
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authorized, please login" });
  }

  try {
    // Verify the token using the secret key
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by ID from the token
    const user = await User.findById(verified.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user's account is suspended
    if (user.role === "suspended") {
      return res.status(403).json({ message: "User suspended, please contact support" });
    }

    // Attach the user to the request object for further use in the route
    req.user = user;
    next();
  } catch (error) {
    // Catch token-related errors like expiration or invalid signature
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired, please login again" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token, please login again" });
    }
    
    // Catch all other errors
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = {
  protect,
};
