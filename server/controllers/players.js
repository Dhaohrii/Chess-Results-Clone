const db=require('../database/db');

const getAllPlayers = function (req, res) {
    const sql="SELECT * from `players`";
    db.query(sql,(error,results)=>{
       if(error){
           res.status(500).send(error)
       }
       else{
           res.send(results)
       }
    })
   };
   const addPlayer = function(req, res) {
    const newPlayer = {
        name: req.body.name,
        rating: req.body.rating,
        country: req.body.country
    };

    const sql = "INSERT INTO `players` (name, rating, country) VALUES (?, ?, ?)";
    db.query(sql, [newPlayer.name,newPlayer.rating,newPlayer.country], function(error, results) {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    });
};
const getPlayerById = function (req, res) {
    const id=req.params.id
    const sql = `SELECT * FROM players WHERE id = ${id}`;
    db.query(sql,(error,results)=>{
       if(error){
           res.status(500).send(error)
       }
       else{
           res.send(results)
       }
    })
   };

module.exports={getAllPlayers,addPlayer,getPlayerById}