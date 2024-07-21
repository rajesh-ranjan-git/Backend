import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: { type: String, unique: true, lowercase: true, required: true },
  email: { type: String, unique: true, lowercase: true, required: true },
  password: { type: String, required: true, min: [8, "Password is too short"] },
  phoneNumber: {
    type: Number,
    min: [10, "Not a valid number"],
    min: [12, "Not a valid number"],
  },
});

const User = model("User", userSchema);

export default User;

// Create User
// Update User
// Replace User
// Delete User
// All Users
// Single User
// Login
// Signup / Create User
