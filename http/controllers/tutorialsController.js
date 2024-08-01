import { getTutorials as getTutorialsFromModel } from '../models/tutorialsModel.js';

export const getTutorials = (req, res) => {
    const tutorials = getTutorialsFromModel();
    res.render('tutorials', { tutorials });
};