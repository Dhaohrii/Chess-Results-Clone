const route=require('express').Router();

const controller=require('../controllers/scores')

route.get('/all',controller.getAllScores);
route.post('/add',controller.addScore);

module.exports=route;