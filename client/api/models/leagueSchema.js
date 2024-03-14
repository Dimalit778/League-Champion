import mongoose from 'mongoose';

const leagueSchema = mongoose.Schema({
  leagueName: {
    type: String,
    required: true,
    min: 2,
    max: 30,
  },
  codeLeague: {
    type: Number,
    required: true,
  },
  league: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  members: [],
  rounds: [],
});

export default mongoose.model.Leagues || mongoose.model('League', leagueSchema);
