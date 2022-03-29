import { Router } from 'express';
import Pagination from '../middlewares/pagination.js';
import ArticleModel from '../models/Article.js';
import ArticlesController from '../controllers/Article.js';

const articlesRoutes = Router();
const articlesController = ArticlesController();

// get all articles
articlesRoutes.get(
  '/',
  Pagination(ArticleModel),
  articlesController.getArticles
);

// get article by id
articlesRoutes.get('/:id', articlesController.getArticle);

// create new article
articlesRoutes.post('/', articlesController.createArticle);

// delete article
articlesRoutes.delete('/:id', articlesController.deleteArticle);

export { articlesRoutes };
