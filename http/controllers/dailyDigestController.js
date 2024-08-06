import dailyDigestData from '../models/dailyDigestModel.js';
import tutorialsData from '../models/tutorialsModel.js';
import designToolsData from '../models/designToolsModel.js';

export const renderDailyDigestIndex = (req, res) => {
    res.render('daily_digest', { dailyDigests: dailyDigestData });
};


export const getDailyDigestArticleById = (req, res) => {
    const articleId = parseInt(req.params.id, 10);
    const article = dailyDigestData.find(article => article.id === articleId);

    if (article) {
        res.render('articles', { article, 
            tutorials: tutorialsData,
            dailyDigests: dailyDigestData,
            designTools: designToolsData,
            selectedCategory: 'Daily Digest'
         });
    } else {
        res.status(404).send('Article not found');
    }
};