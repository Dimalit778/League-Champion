import mongoose from 'mongoose';

const userRoundSchema = mongoose.Schema({
  matches: [
    {
      matchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Match',
      },
      homeScore: {
        type: Number,
      },
      awayScore: {
        type: Number,
      },
    },
  ],

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  roundId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Round',
  },
});

export default mongoose.model.UserRounds ||
  mongoose.model('UserRound', userRoundSchema);
