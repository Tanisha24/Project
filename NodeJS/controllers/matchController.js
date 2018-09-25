const express=require('express');
var router=express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Match}=require('../models/match');

// => localhost:3000/matches/
router.get('/:id',(req,res)=>{
  if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
  Match.findById(req.params.id,(err, doc)=>{
    if(!err)
    {res.send(doc);}
    else {
      console.log("Error in retreiving match details"+ JSON.stringify(err,undefined,2));
    }
  })
});
router.get('/',(req,res)=>{
  Match.find((err, docs)=>{
    if(!err)
    {res.send(docs);}
    else {
      console.log("Error in retreiving match details"+ JSON.stringify(err,undefined,2));
    }
  })
});

router.post('/', (req, res) => {
    var mat = new Match({
      Year:req.body.Year,
      Host:req.body.Host,
      City:req.body.City,
      Sta:req.body.Sta,
      Team1:req.body.Team1,
      Team2:req.body.Team2,
      Winner:req.body.Winner,
      Margin:req.body.Margin,
      ManofT:req.body.ManofT,
      ManofM:req.body.ManofM
    });
    mat.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
    });
});




module.exports=router;
