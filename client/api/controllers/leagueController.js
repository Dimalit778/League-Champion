import User from '../models/userSchema.js';
import League from '../models/leagueSchema.js';
import asyncHandler from 'express-async-handler';

//@ ADD LEAGUE
const addLeague = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const data = req.body;
  // check if user is exist
  const userExists = await User.findById(userId);
  if (!userExists) return res.status(401).json({ message: 'user not found' });

  // create new league
  const newLeague = await League.create({
    leagueName: data.leagueName,
    codeLeague: Math.random().toString(20).substr(2, 6),
    league: data.league,
    owner: userId,
  });

  if (!newLeague)
    return res.status(401).json({ message: 'failed to create league' });

  // push user to members array
  newLeague.members.push({
    id: userExists.id,
    name: userExists.name,
    points: 0,
  });
  // save new league
  await newLeague.save();

  await User.updateOne(
    { _id: userExists._id },
    {
      $push: {
        leagues: { id: newLeague._id, leagueName: newLeague.leagueName },
      },
    }
  );

  res.status(200).send(newLeague);
  // const user = await User.update({ leagues: [...{ newLeague }] });

  // update user leagues with the new league
  // const updateUser = await User.findByIdAndUpdate(
  //   {
  //     _id: userId,
  //   },
  //   updateUser.leagues.push({ newLeague })
  // );
});
//@ GET LEAGUE
const getLeague = asyncHandler(async (req, res) => {
  const leagueId = req.params.id;

  const league = await League.findById(leagueId);
  if (!league) return res.status(401).json({ message: 'League not found' });

  res.status(200).send(league);
});
export { addLeague, getLeague };
