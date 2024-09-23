const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const usersSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["campaigner", "marketer"],
        required: [true, 'Role is required'],
    },
    balance: {
        type: Number,
        default: 0, // Initialize with default balance of 0
    },
});

usersSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
});

const User = mongoose.model("User", usersSchema);
module.exports = User;
