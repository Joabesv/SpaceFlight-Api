import { Router } from 'express';
import Pagination from '../middlewares/pagination.js';
import ArticleModel from '../models/Article.js';
import ArticlesController from '../controllers/Article.js';

const articlesRoutes = Router();
const articlesController = ArticlesController();

articlesRoutes.get(
  '/',
  Pagination(ArticleModel),
  articlesController.getArticles
);

articlesRoutes.get('/:id', articlesController.getArticle);

articlesRoutes.post('/', articlesController.createArticle);

export { articlesRoutes };
