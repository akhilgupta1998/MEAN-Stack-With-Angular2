const express = require('express');
const app = express();
const path = require ('path');


const mongoose = require('mongoose');
const config = require('./config/database');
mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err)=>{
  if (err){
    console.log('Couldnt connect this',err);
  }
  else{

    console.log('successfully connected'+ config.db);
  }
});

app.use(express.static(__dirname+'/dell/dist/dell/'));

app.get('/',(req,res)=>{
  res.sendFile(path.join(__direname+'/dell/dist/dell/index.html'));
});

app.listen(8080,()=>
{
  console.log('Listening to 8080');
});
