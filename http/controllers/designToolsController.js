import designToolsData from '../models/designToolsModel.js';
import tutorialsData from '../models/tutorialsModel.js';
import dailyDigestData from '../models/dailyDigestModel.js';

export const renderDesignToolsIndex = (req, res) => {
    res.render('design_tools', { designTools: designToolsData });
};


export const getDesignToolsArticleById = (req, res) => {
    const articleId = parseInt(req.params.id, 10);
    const article = designToolsData.find(article => article.id === articleId);

    if (article) {
        res.render('articles', { 
        article,
        tutorials: tutorialsData,
        dailyDigests: dailyDigestData,
        designTools: designToolsData,
        selectedCategory: 'Design Tools'
         });
    } else {
        res.status(404).send('Article not found');
    }
};
