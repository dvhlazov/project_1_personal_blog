import { Router } from "express";


const router = Router();

router.get('/', (req, res) => {
    res.json( { test: 'test'});
});

router.get('/main', (req, res) => {
    const title = 'Project simple sample.Runners';
    const textTitle = 'Here you can see how to deploy a simple project on your own server, using express, special runners for separate servers between other processes and other frameworks';
    const imageUrl = '/images/screen1.png' ;
    res.render('index', { title, textTitle, imageUrl  });
});



export default router;