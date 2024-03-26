import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute.js';
import leagueRoute from './routes/leagueRoute.js';
import footballRoute from './routes/footballRoute.js';
import { errorHandler } from './utilits/errorMiddleware.js';

const app = express();
app.use(express.urlencoded({ extended: false }));
dotenv.config();

app.use(bodyParser.json());
// app.use(cors());
// //@ ---- { League Routes } ---- //
app.use('/league', leagueRoute);
//@ ---- { Auth Routes } ---- //
app.use('/auth', authRoute);
//@ ---- { Football API Routes } ---- //
app.use('/fbApi', footballRoute);
const port = 3000;

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log('Connected to Mongodb ChampionApp');
  })
  .catch((err) => {
    console.log(err);
    console.log(process.env.DB);
  });
app.use(errorHandler);
app.listen(port, () => {
  console.log('server listening on port 3000');
});
