import { Router } from "express";
import { getTutorials } from '../controllers/tutorialsController.js';

const tutorialsRouter = Router();

tutorialsRouter.get('/', getTutorials);

export default tutorialsRouter;