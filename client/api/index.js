import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute.js';

const app = express();
app.use(express.urlencoded({ extended: false }));
dotenv.config();

app.use(bodyParser.json());

// //@ ---- { User Routes } ---- //
// app.use('users', userRoute);
//@ ---- { Auth Routes } ---- //
app.use('/auth', authRoute);

const port = 3000;

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to Mongodb ChampionApp');
  })
  .catch((err) => {
    console.log(err);
    console.log(process.env.DB);
  });

app.listen(port, () => {
  console.log('server listening on port 3000');
});
