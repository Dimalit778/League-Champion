import express from 'express';
import { login, register } from '../controllers/authController.js';

const router = express.Router();

//@ ----> REGISTER
// POST -- /api/auth/register
router.post('/register', register);

//@ ---->LOGIN
//POST -- /api/users/login
router.post('/login', login);

export default router;
