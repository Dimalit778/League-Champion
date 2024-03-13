import express from 'express';
import {
  login,
  register,
  getAll,
  getUser,
} from '../controllers/authController.js';

const router = express.Router();

//@ ----> REGISTER
//POST -- /auth/register
router.post('/register', register);

//@ ---->LOGIN
//POST -- /auth/login
router.post('/login', login);

//@ ---->GET ALL
//GET -- /auth/getAll
router.get('/getAll', getAll);

//@ ---->GET USER
//GET -- /auth/getUser
router.get('/getUser/:id', getUser);

export default router;
