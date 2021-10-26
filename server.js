require('dotenv').config()
const express = require('express'),
app = express(),
PORT = process.env.PORT;

app.use(express.static(__dirname + '/Files'))

app.get('/' , getHome)

function getHome(req,res){
    res.sendFile(__dirname + '/Files/index.html')
}

app.listen(PORT , ()=>{
    console.log('Running')
})