const express=require('express');
const app=express();
const cors=require('cors');
const db=require('./database/db');
const tournRoutes=require('./routes/tournaments')
const matchesRoutes=require('./routes/matches')
const playersRoutes=require('./routes/players')
const scoresRoutes=require('./routes/scores')

app.use(cors())
app.use(express.json());
const port=3000
app.use('/tournaments',tournRoutes)
app.use('/players',playersRoutes)
app.use('/matches',matchesRoutes)
app.use('/scores',scoresRoutes)


app.listen(port,(err)=>{
    console.log(`Listening at ${port}`)
    if(err){
        console.log(err)
    }
});