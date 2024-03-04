import User from '../models/userSchema.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';

//@ --->   < LOGIN > user & get token
// route   POST /api/auth/login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check all fields are valid
  if (!email || !password)
    return res.status(400).send({ message: 'Fill all Fields' });

  // Convert the email to lower letters
  let LowerCaseEmail = email.toLowerCase();

  //>>1 check if email exist
  const user = await User.findOne({ email: LowerCaseEmail });

  if (!user) {
    return res.status(400).send({ message: 'Email Not Exists' });
  }

  if (user && (await user.matchPassword(password))) {
    const sendUser = {
      id: user._id,
      name: user.name,

      email: user.email,
    };
    res.json(sendUser);
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
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    return res.status(400).send({ message: 'Failed Send You Email' });
  }
});
const getAll = asyncHandler(async (req, res) => {
  const allUsers = await User.find();

  return res.status(200).send(allUsers);
});
export { login, register, getAll };
