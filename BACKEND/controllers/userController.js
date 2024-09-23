const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const generateToken = require("../utils/index");

const register = asyncHandler(async (req, res) => {
  try {
    const { fullname, email, password,role } = req.body;
    // Check if user already exists
    const userExists = await User.findOne({ email });

    userExists &&
      (() => {
        res.status(400);
        throw new Error("Email already exists");
      })();


    const user = await User.create({
      fullname,
      email,
      password,
      role
    });
    const token = generateToken(user._id);
    //   send http-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });
    if (user) {
      const { _id, fullname, email, role } = user;

      res.status(201).json({
        _id,
        fullname,
        email,
        role,
        token,
      });
    } else {
      res.status(400);
      throw new Error("Invalid Data");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});


const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    console.log(user)
    if (user && (await bcrypt.compare(password, user.password))) {
      // Generate token
      const token = generateToken(user._id);

      // Set cookie with token
      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), // 1 day
        sameSite: "none",
        secure: true,
      });

      // Send user data including role and token
      res.status(200).json({
        _id: user._id,
        email: user.email,
        role: user.role, // Include the role in the response
        token: token,
      });
    } else {
      res.status(400).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: 'Server error' });
  }
});
const getUser = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (user) {
      const { _id, fullname, email, role } = user;

      res.status(200).json({
        _id,
        fullname,
        email,
        role,
      });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

// Get details of all admins

const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find().sort("-createdAt").select("-password");
  if (!user) {
    res.status(500);
    throw new Error("something went wrong");
  }

  res.status(200).json(user);
});



const updateUser = asyncHandler(async (req, res) => {
  const userId = req.params.userId
  const {role} = req.body
  
  try {
    const user = await Admin.findById(userId);

    if (!user) {
      return res.status(404).json({msg: "user not found"});
    }

    user.role = role;

    await user.save();

    res.status(200).json(user)
  } catch (error) {
    console.error("error updating admin:", error);
    res.status(500).json({msg: "Internal server error"})
  }
});

const logoutUser = asyncHandler(async(req, res)=> {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0), // 1 day
    sameSite: "none",
    secure: true,
  });

  return res.status(200).json({message: "logout Successful"});
})

// Delete an admin

const deleteUser= asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;
    const user = User.findById(userId);
    if (!user) {
      res.status(404);
      throw new Error("user not found");
    }    

    await user.deleteOne();
    res.status(200).json({
      message: "user data deleted successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});


module.exports = {
  register,
  login,
  getUser,
  deleteUser,
  getUsers,
  updateUser,
  logoutUser
};