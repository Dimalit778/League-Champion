import express from 'express';
import { login, register, getAll } from '../controllers/authController.js';

const router = express.Router();

//@ ----> REGISTER
// POST -- /api/auth/register
router.post('/register', register);

//@ ---->LOGIN
//POST -- /api/users/login
router.post('/login', login);

router.get('/getAll', getAll);

export default router;
