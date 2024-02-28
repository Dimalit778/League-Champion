import mongoose from 'mongoose';

const roundSchema = mongoose.Schema({
  roundNumber: {
    type: Number,
    required: true,
  },
  games: [],

  leagueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'League',
  },
});

export default mongoose.model.Rounds || mongoose.model('Round', roundSchema);
