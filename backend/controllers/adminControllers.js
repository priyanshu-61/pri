const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Admin = require("../models/adminModel");
const User = require("../models/userModel");
//const jwt = require("jsonwebtoken")
//const bcrypt = require("bcrypt");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");


exports.registerAdmin = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    const admin = await Admin.create({
        name,
        email,
        password
    });
    sendToken(admin, 201, res);
    // console.log(registerAdmin)
});


// Get all User
exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users,
    });
};