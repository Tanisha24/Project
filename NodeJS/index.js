const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const {mongoose}=require('./db.js');//destructuring syntax
var userController=require('./controllers/userController.js');
var matchController=require('./controllers/matchController.js');

var app=express();
app.use(bodyParser.json());
app.use(cors());
//const port=process.env.PORT || 8080;
app.listen(3000,()=> console.log('Server started at port:3000'));
app.use('/users', userController);
app.use('/matches', matchController);
