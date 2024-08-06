import { Router } from 'express';
import { renderDesignToolsIndex, getDesignToolsArticleById } from '../controllers/designToolsController.js';

const designToolsRouter = Router();

designToolsRouter.get('/', renderDesignToolsIndex);
designToolsRouter.get('/:id', getDesignToolsArticleById);

export default designToolsRouter;