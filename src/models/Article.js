import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ArticleSchema = new Schema(
  {
    id: 'Number',
    featured: 'boolean',
    title: { type: 'string', required: true },
    url: 'string',
    imageUrl: 'string',
    newsSite: { type: 'string', required: true },
    summary: { type: 'string', required: true },
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
  },
  {
    timestamps: true,
  }
);

const ArticleModel = mongoose.model('Articles', ArticleSchema);

export default ArticleModel;
