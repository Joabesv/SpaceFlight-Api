import mongoose from 'mongoose';
import getAPIData from '../helpers/GetData.js';
import ArticleModel from '../models/Article.js';
import 'dotenv/config';

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('started'))
  .catch(err => console.log(err));

const seedItems = await getAPIData();

const seedDb = async () => {
  await ArticleModel.insertMany(seedItems);
};

seedDb().then(() => {
  mongoose.connection.close();
});
