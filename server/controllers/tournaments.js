const db=require('../database/db');

const getAllTournaments = function (req, res) {
    const sql="SELECT * from `tournaments`";
    db.query(sql,(error,results)=>{
       if(error){
           res.status(500).send(error)
       }
       else{
           res.send(results)
       }
    })
   };

   const addTournament = function(req, res) {
    const newT = {
        name: req.body.name,
        location: req.body.location,
        start_date: req.body.start_date,
        end_date:req.body.end_date
    };

    const sql = "INSERT INTO `tournaments` (name, location, start_date, end_date) VALUES (?, ?, ?, ?)";
    db.query(sql, [newT.name,newT.location,newT.start_date,newT.end_date], function(error, results) {
        if (error) {
            res.status(500).send(error);
        } else {
            res.json(results);
        }
    });
};

const getTournamentsById = function (req, res) {
    const id=req.params.id
    const sql=`SELECT * from tournaments WHERE id=${id}`;
    db.query(sql,(error,results)=>{
       if(error){
           res.status(500).send(error)
       }
       else{
           res.send(results)
       }
    })
   };
module.exports={getAllTournaments,addTournament,getTournamentsById}