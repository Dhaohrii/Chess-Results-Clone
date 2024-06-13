const route=require('express').Router();

const controller=require('../controllers/matches')

route.get('/all',controller.getAllMatches);
route.post('/add',controller.addMatch);
route.get('/match/:id',controller.getAllMatchesByPlayerId);

module.exports=route;