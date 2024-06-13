const db=require('../database/db');

const getAllMatches = function (req, res) {
    const sql="SELECT * from `matches`";
    db.query(sql,(error,results)=>{
       if(error){
           res.status(500).send(error)
       }
       else{
           res.send(results)
       }
    })
   };

   const addMatch = function(req, res) {
    const newMatch = {
        tournament_id: req.body.tournament_id,
        round: req.body.round,
        player1_id: req.body.player1_id,
        player2_id: req.body.player2_id,
        result: req.body.result
    };

    const sql = "INSERT INTO `matches` (tournament_id, round, player1_id, player2_id, result) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [newMatch.tournament_id, newMatch.round, newMatch.player1_id, newMatch.player2_id, newMatch.result], function(error, results) {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    });
};

const getAllMatchesByPlayerId = function (req, res) {
    const id=req.params.id
    const sql = `SELECT 
    matches.id,
    matches.tournament_id,
    tournaments.name AS tournament_name,
    p1.name AS player1_name,
    p2.name AS player2_name,
    matches.result
FROM 
    matches
INNER JOIN 
    players p1 ON matches.player1_id = p1.id
INNER JOIN 
    players p2 ON matches.player2_id = p2.id
INNER JOIN 
    tournaments ON matches.tournament_id = tournaments.id
WHERE 
    matches.player1_id = ${id} OR matches.player2_id = ${id};

`;
    db.query(sql,(error,results)=>{
       if(error){
           res.status(500).send(error)
       }
       else{
           res.send(results)
       }
    })
   };


    

module.exports={getAllMatches,addMatch,getAllMatchesByPlayerId}