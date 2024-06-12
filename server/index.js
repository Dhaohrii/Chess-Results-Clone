const express=require('express');
const app=express();
const cors=require('cors');
const db=require('./database/db');


const port=3000


app.listen(port,(err)=>{
    console.log(`Listening at ${port}`)
    if(err){
        console.log(err)
    }
})