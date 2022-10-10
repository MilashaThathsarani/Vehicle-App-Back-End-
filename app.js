const express = require('express');
const mongoose = require('mongoose')

const user = require('./routes/user')
const car = require('./routes/car')


const app = express();
const port = 8000;

const url='mongodb://127.0.0.1/express';

mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection

con.on("open", ()=>{
    console.log('MongoDB Connected');
})

app.use(express.json());
app.use('/users',user)
app.use('/car',car)

app.listen(port,(req,res) => {
    console.log(`Example app listening on port ${port}`);
})