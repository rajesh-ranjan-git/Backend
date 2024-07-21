import User from "../Models/user.model.js";

// Create User
const createUser = async (req, res) => {
  let data = req.body;
  let newUser = new User(data);
  let userData = await newUser.save();

  res.send(userData);
};

// Update User
const updateUser = async (req, res) => {
  let { email } = req.body;
  let userData = await User.findOneAndUpdate({ email: email }, req.body, {
    new: true,
  });

  res.send(userData);
};

// Replace User
const replaceUser = async (req, res) => {
  let { email } = req.body;
  let userData = await User.findOneAndReplace({ email: email }, req.body, {
    new: true,
  });

  res.send(userData);
};

// Delete User
const deleteUser = async (req, res) => {
  let { email } = req.body;
  let userData = await User.findOneAndDelete({ email: email }, req.body, {
    new: true,
  });

  res.send(userData);
};

// Single User
// const singleUser = async (req, res) => {
//   let { email } = req.body;
//   let userData = await User.findOne({ email: email }, req.body, {
//     new: true,
//   });

//   res.send(userData);
// };

// All Users
const allUsers = async (req, res) => {
  let userData = await User.find();

  res.send(userData);
};

const signUp = async (req, res) => {
  let user = await User.findOne({ email: email });

  if (user) {
    res.send({ result: false, message: "User already exists.." });
  }
};

export { createUser, updateUser, replaceUser, deleteUser, allUsers };

// Create User
// Update User
// Replace User
// Delete User
// All Users
// Single User
// Login
// Signup / Create User
