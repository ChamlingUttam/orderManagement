import 'dotenv/config'
import mongoose from "mongoose";
import User from "../models/auth.model.js";
import bcrypt from "bcrypt";
import { dbConnect } from "../config/db.js";

const seedAdmin = async () => {
  await dbConnect();

  const existAdmin = await User.findOne({ email: "admin@gmail.com" });
  if (existAdmin) {
    console.log("Admin already exists!");
    process.exit();
  }

  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash("StrongPass123", salt);

  await User.create({
    fullname: " Admin",
    email: "admin@gmail.com",
    password: hashPass,
    role: "admin",
  });

  console.log("Admin created successfully!");
  process.exit();
};

seedAdmin();
