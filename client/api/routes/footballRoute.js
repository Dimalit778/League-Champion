import express from 'express';
import { getAllComp } from '../controllers/footballAPI.js';

const router = express.Router();

router.get('/allComp', getAllComp);
export default router;
