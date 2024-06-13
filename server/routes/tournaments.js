const route=require('express').Router();

const controller=require('../controllers/tournaments')

route.get('/all',controller.getAllTournaments);
route.post('/add',controller.addTournament)
route.get('/tournament/:id',controller.getTournamentsById)
module.exports=route;