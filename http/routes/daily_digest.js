import { Router } from "express";

const dailyDigestRouter = Router();

dailyDigestRouter.get('/', (req, res) => {
    const title = 'Project simple sample.Runners';
    const textTitle = 'Here you can see how to deploy a simple project on your own server, using express, special runners for separate servers between other processes and other frameworks';
    const imageUrl = '/images/screen1.png' ;
    res.render('daily_digest', { title, textTitle, imageUrl  });
});

export default dailyDigestRouter;

