import ArticleModel from '../models/Article.js';

export default function ArticlesController() {
  async function getArticles(req, res) {
    try {
      const articles = await ArticleModel.find({});
      return res.status(200).json(articles);
    } catch (err) {
      return res.status(500).json({ err });
    }
  }

  async function getArticle(req, res) {
    try {
      const articlesId = req.params.id;
      const articles = await ArticleModel.findById(articlesId);
      return res.status(200).json(articles);
    } catch (err) {
      return res.status(404).json({
        msg: 'Article not Found :(',
        err: `Error: ${err.message}`,
      });
    }
  }

  return { getArticles, getArticle };
}
