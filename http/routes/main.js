import { Router } from "express";



import tutorialsData from '../models/tutorialsModel.js';
import designToolsData from "../models/designToolsModel.js";
import dailyDigestData from "../models/dailyDigestModel.js";




const router = Router();

router.get('/main', (req, res) => {
    const title = 'Personal Blog';
    
   
    const tutorials = tutorialsData; 
    const designTools = designToolsData;
    const dailyDigests = dailyDigestData;

    res.render('index', { title, tutorials, designTools, dailyDigests }); 
});

export default router;