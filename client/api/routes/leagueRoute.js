import express from 'express';

const router = express.Router();
//POST -- /league/addLeague/ :userID
router.post('/addLeague/:id');

export default router;
