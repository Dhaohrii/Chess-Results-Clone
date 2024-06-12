const db=require('mysql2');

const connection=db.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'chess_results'
});

connection.connect((err)=>{
    if (err){
        console.log(err)
    }
    else {
        console.log(`Database Connected at ${connection.threadId}`)
    }
});

module.exports=connection;