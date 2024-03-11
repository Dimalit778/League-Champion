import User from '../models/userSchema.js';
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

dotenv.config();
//@ --->   < LOGIN > user & get token
// route   POST /api/auth/login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Convert the email to lower letters
  let LowerCaseEmail = email.toLowerCase();

  //>>1 check if email exist
  const user = await User.findOne({ email: LowerCaseEmail });

  if (!user) {
    return res.status(400).send({ message: 'Email Not Exists' });
  }

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT);
    const userData = { id: user._id, name: user.name, email: user.email };

    return res.status(200).json({ userData, token });
  } else {
    return res.status(400).send({ message: 'Wrong Password' });
  }
});

// ----------------------------------------------------------------- //
///@ --->   < REGISTER > a new user
// route   POST /api/users/register
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // check if user is already registered
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).send({ message: 'User already exists' });
  }
  // Convert the email to lower letters
  let LowerCaseEmail = email.toLowerCase();
  // create and store a new user
  const user = await User.create({
    name,
    email: LowerCaseEmail,
    password,
  });

  if (user) {
    res.status(200).send({
      message: 'User created successfully',
    });
  } else {
    return res.status(400).send({ message: 'Error , Login failed' });
  }
});
const getAll = asyncHandler(async (req, res) => {
  const allUsers = await User.find();

  return res.status(200).send(allUsers);
});

const getUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  const userExists = await User.findById(userId);
  if (!userExists) return res.status(401).json({ message: 'user not found' });

  res.status(200).json({
    id: userId,
    name: userExists.name,
    email: userExists.email,
    leagues: userExists.leagues,
  });
});
export { login, register, getAll, getUser };
