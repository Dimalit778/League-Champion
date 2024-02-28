import mongoose from 'mongoose';

const matchSchema = mongoose.Schema({
  homeScore: {
    type: Number,
    required: true,
  },
  awayScore: {
    type: Number,
    required: true,
  },
  matchStatus: {
    type: String,
    required: true,
  },
  games: [],

  roundId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Round',
  },
});

export default mongoose.model.Matches || mongoose.model('Match', matchSchema);
