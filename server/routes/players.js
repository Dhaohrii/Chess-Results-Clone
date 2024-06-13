const route=require('express').Router();

const controller=require('../controllers/players')

route.get('/all',controller.getAllPlayers);
route.post('/add',controller.addPlayer);
route.get('/player/:id',controller.getPlayerById);
module.exports=route;