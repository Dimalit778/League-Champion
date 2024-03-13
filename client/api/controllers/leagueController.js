import User from '../models/userSchema.js';
import asyncHandler from 'express-async-handler';

const addLeague = asyncHandler(async (req, res) => {
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
export { addLeague };
