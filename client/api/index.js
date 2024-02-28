import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
app.use(express.urlencoded({ extended: false }));
dotenv.config();

app.use(bodyParser.json());

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
