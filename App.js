const express = require('express');
const dbconfig = require('./dbconfig');
const app = express();
const router = require('./routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.use('/', router)

app.listen(5000, ()=>{
    console.log("App listening on port 5000");
});
