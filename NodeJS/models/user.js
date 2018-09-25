const mongoose=require('mongoose');//destructuring syntax
var User=mongoose.model('User',{
  name:{type:String},
  email:{type:String},
  description:{type:String},
  year:{type:Number}
});
module.exports={User};
