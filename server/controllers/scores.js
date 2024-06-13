const db=require('../database/db');

const getAllScores = function (req, res) {
    const sql="SELECT * from `scores`";
    db.query(sql,(error,results)=>{
       if(error){
           res.status(500).send(error)
       }
       else{
           res.send(results)
       }
    })
   };
   const addScore = function(req, res) {
    const newScore = {
        tournament_id: req.body.tournament_id,
        player_id: req.body.player_id,
        score: req.body.score
    };

    const sql = "INSERT INTO `scores` (tournament_id, player_id, score) VALUES (?, ?, ?)";
    db.query(sql, [newScore.tournament_id,newScore.player_id,newScore.score], function(error, results) {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    });
};

module.exports={getAllScores,addScore}