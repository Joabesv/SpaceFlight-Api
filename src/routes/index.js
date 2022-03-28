import { Router } from 'express';

import { articlesRoutes } from './articles.js';

const router = Router();

router.use('/articles', articlesRoutes);

export { router };
