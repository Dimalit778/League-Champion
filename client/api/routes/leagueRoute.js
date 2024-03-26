import express from 'express';
import {
  addLeague,
  getAllUserLeagues,
  getLeague,
} from '../controllers/leagueController.js';

const router = express.Router();

//POST -- /league/addLeague/ :userID
router.post('/addLeague/:id', addLeague);

//GET -- /league/getLeague/ :leagueID
router.get('/getLeague/:id', getLeague);

//GET -- /league/getAllUserLeagues/ :userID
router.get('/getAllUserLeagues/:id', getAllUserLeagues);

export default router;
