const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const url = 'mongodb://127.0.0.1:27017/userCrud';

mongoose.connect(url , {useNewUrlParser: true});

const db = mongoose.connection;

db.once('open', ()=>{
    console.log("Connection established");
})
db.on('error', (err)=>{
    console.log(err.message);
})


