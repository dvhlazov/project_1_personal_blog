import tutorialsData from '../models/tutorialsModel.js';
import dailyDigestData from '../models/dailyDigestModel.js';
import designToolsData from '../models/designToolsModel.js';


export const renderTutorialsIndex = (req, res) => {
    res.render('tutorials', { tutorials: tutorialsData });
};



export const getTutorialsArticleById = (req, res) => {
    const articleId = parseInt(req.params.id, 10);
    const article = tutorialsData.find(article => article.id === articleId);
    

    if (article) {
        res.render('articles', { 
        article,
        tutorials: tutorialsData,
        dailyDigests: dailyDigestData,
        designTools: designToolsData,
        selectedCategory: 'Tutorials'
         });
        
    } else {
        res.status(404).send('Article not found');
    }
};
