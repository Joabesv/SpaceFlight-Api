import mongoose from 'mongoose';
import 'dotenv/config';
import cron from 'node-cron';

import getApiData from './GetData.js';
import ArticleModel from '../models/Article.js';

const seedItems = await getApiData();

export const job = () => {
  cron.schedule('0 9 * * *', async () => {
    mongoose
      .connect(process.env.MONGO_URI)
      .then()
      .catch(err => console.log(err));

    const seedDb = async () => {
      await ArticleModel.insertMany(seedItems);
    };

    console.log({ msg: `It's 09:00 time to update articles` });

    seedDb();
  });
};
