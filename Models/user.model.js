import mongoose, { Schema } from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  userName: { type: String, unique: true, lowercase: true, required: true },
  email: { type: String, unique: true, lowercase: true, required: true },
  password: { type: String, required: true, min: [8, "Password is too short"] },
  phoneNumber: {
    type: Number,
    required: true,
    min: [10, "Not a valid number"],
    min: [12, "Not a valid number"],
  },
});

const userModel = model("User", userSchema);

export default userModel;
