import { Router } from 'express';
import { renderTutorialsIndex, getTutorialsArticleById } from '../controllers/tutorialsController.js';

const tutorialsRouter = Router();

tutorialsRouter.get('/', renderTutorialsIndex);
tutorialsRouter.get('/:id', getTutorialsArticleById);


export default tutorialsRouter;