import { Router } from 'express';
import getAPIData from '../helpers/GetData.js';

const articlesRoutes = Router();

articlesRoutes.get('/', async (req, res) => {
  const data = await getAPIData();
  return res.json(data);
});

export { articlesRoutes };
