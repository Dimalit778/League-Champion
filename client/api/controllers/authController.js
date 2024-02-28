import User from '../models/userSchema.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcrypt';

//@ --->   < LOGIN > user & get token
// route   POST /api/auth/login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check all fields are valid
  if (!email || !password)
    return res
      .status(400)
      .send({ message: 'No user found for this email/password' });

  // Convert the email to lower letters
  let LowerCaseEmail = email.toLowerCase();

  //>>1 check if email exist
  const user = await User.findOne({ email: LowerCaseEmail });

  if (!user) {
    return res.status(400).send({ message: 'Email Not Exists' });
  }

  if (user && (await user.matchPassword(password))) {
    // ---> Generate tokes

    // generateToken(res, user._id);

    // generateRefreshToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    return res.status(400).send({ message: 'Wrong Password' });
  }
});
// ----------------------------------------------------------------- //
//@ --->   < REGISTER > a new user
// route   POST /api/users/register
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check all fields are valid
  if (!name) return res.status(400).send({ message: 'Enter Your Name' });
  if (!email) return res.status(400).send({ message: 'Enter Your Email' });
  if (!password) return res.status(400).send({ message: 'Enter Password' });

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
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    return res.status(400).send({ message: 'Failed Send You Email' });
  }
});
export { login, register };
