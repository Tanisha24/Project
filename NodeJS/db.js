const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/ICC',{ useNewUrlParser: true },(err)=>{
  if(!err)
  console.log("MongoDb connected succesfully");
  else {
    console.log("Error in connection"+ JSON.stringify(err,undefined,2));
  }
});
module.exports=mongoose;
