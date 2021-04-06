import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const authenticate = await bcrypt.compare(password, user.password);
    if (!authenticate)
      return res.status(400).json({ message: "Invalide Credentials" });
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ userData: user, token });
  } catch (error) {
    res.status(500).json({ Message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) return res.status(404).json({ message: "User already Exist" });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords dont match" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const userData = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const token = jwt.sign(
      { email: userData.email, id: userData._id },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ userData, token });
  } catch (error) {
    res.status(500).json({ Message: "Something went wrong" });
  }
};
