import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  id: 'Number',
  featured: 'boolean',
  title: 'string',
  url: 'string',
  imageUrl: 'string',
  newsSite: 'string',
  summary: 'string',
  publishedAt: 'string',
  launches: [
    {
      id: 'string',
      provider: 'string',
    },
  ],
  events: [
    {
      id: 'string',
      provider: 'string',
    },
  ],
});

const ArticleModel = mongoose.model('Articles', ArticleSchema);

export default ArticleModel;
