const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const generateToken = require("../utils/index");

// Register a new admin
const register = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  // Validate input fields
  if (!name || !email || !role || !password) {
    res.status(400);
    throw new Error("Please fill all the required fields");
  }

  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be at least 6 characters long");
  }

  // Check if the user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Email already exists");
  }

  // Create a new user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  // Generate a JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Send HTTP-only cookie with the token
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  // Send response with user details and token
  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token,
  });
});



const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

try {
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  
    // Generate the JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });


  // Include user information in the response
  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    
    }
  });
} catch (error) {
  res.status(500).json({ message: 'Server error' });
}


});

const getUser = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);

    if (user) {
      const { _id, name, email, role } = user;

      res.status(200).json({
        _id,
        name,
        email,
        role,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});



const deleteUser = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;
    const user = User.findById(userId);
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    await user.deleteOne();
    res.status(200).json({
      Message: "User data deleted successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Get details of all user
const getAllUser = asyncHandler(async (req, res) => {
  const user = await User.find().sort("-createdAt").select("-password");
  if (!user) {
    res.status(500);
    throw new Error("Something went wrong");
  }
  res.status(200).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const updates = req.body;

  // Define allowed fields for update
  const allowedUpdates = ['name', 'email', 'role', 'password'];
  
  // Filter updates to only include allowed fields
  const filteredUpdates = {};
  Object.keys(updates).forEach(key => {
    if (allowedUpdates.includes(key)) {
      filteredUpdates[key] = updates[key];
    }
  });

  try {
    // Find user by ID and update with filtered updates
    const user = await User.findByIdAndUpdate(userId, { $set: filteredUpdates }, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error('Error updating user', error);
    res.status(500).json({ message: 'Server error' });
  }
});


const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", "none", {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now()), // Set expiration to now to effectively delete the cookie
    sameSite: "none",
    secure: true,
  });

  return res.status(200).json({ message: "Logged out successfully" });
});




module.exports = {
  register,
  login,
  getUser,
  deleteUser,
  getAllUser,
  updateUser,
  logoutUser,
};
