import express from 'express';
import {
  login,
  register,
  getAll,
  getUser,
} from '../controllers/authController.js';

const router = express.Router();

//@ ----> REGISTER
// POST -- /api/auth/register
router.post('/register', register);

//@ ---->LOGIN
//POST -- /api/users/login
router.post('/login', login);

router.get('/getAll', getAll);

router.get('/getUser/:id', getUser);

export default router;
