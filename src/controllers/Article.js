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

  async function createArticle(req, res) {
    try {
      const article = req.body;
      const newArticle = await ArticleModel.create(article);
      return res.status(201).json(newArticle);
    } catch (err) {
      return res.status(500).json({
        msg: 'Article not created :(',
        err: `Error: ${err.message}`,
      });
    }
  }

  async function deleteArticle(req, res) {
    try {
      const articleId = req.params.id;
      const articleToDelete = await ArticleModel.findById(articleId);
      await ArticleModel.findByIdAndDelete(articleToDelete);
      return res.status(200).json({ data: articleToDelete });
    } catch (err) {
      return res.status(500).json({
        msg: 'Error on delete :(',
        err: `Error: ${err.message}`,
      });
    }
  }

  async function updateArticle(req, res) {
    try {
      const articleId = req.params.id;
      const updates = req.body;
      await ArticleModel.findByIdAndUpdate(articleId, updates);
      const articleToUpdate = await ArticleModel.findById(articleId);
      return res.status(200).json(articleToUpdate);
    } catch (err) {
      return res.send(400).json({
        msg: 'Error on update',
        err: `Error: ${err.message}`,
      });
    }
  }

  return {
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
  };
}
