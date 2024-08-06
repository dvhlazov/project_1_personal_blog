import { Router } from "express";
import { renderDailyDigestIndex,  getDailyDigestArticleById } from "../controllers/dailyDigestController.js";

const dailyDigestRouter = Router();

dailyDigestRouter.get('/', renderDailyDigestIndex);
dailyDigestRouter.get('/:id', getDailyDigestArticleById);

export default dailyDigestRouter;