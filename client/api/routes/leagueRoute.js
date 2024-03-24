import express from 'express';
import { addLeague, getLeague } from '../controllers/leagueController.js';

const router = express.Router();
//POST -- /league/addLeague/ :userID
router.post('/addLeague/:id', addLeague);
//GET -- /league/getLeague/ :leagueID
router.get('/getLeague/:id', getLeague);

export default router;
