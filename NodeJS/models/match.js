const mongoose=require('mongoose');//destructuring syntax
var Match=mongoose.model('Match',{
  Year:{type: Number},
  Host:{type:String},
  City:{type:String},
  Sta:{type:String},
  Team1:{type:String},
  Team2:{type:String},
  Winner:{type:String},
  Margin:{type:String},
  ManofT:{type:String},
  ManofM:{type:String}
  
});
module.exports={Match};
