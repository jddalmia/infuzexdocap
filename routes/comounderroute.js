const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { default: CompounderById } = require('../client/src/doctors/compounderbyid');


const Compounder = require('../models/compounder')



router.post('/register', (req,res)=>{


    Compounder.find({email:req.body.email} , (err,docs)=>{
        if(docs.length>0)
        {
            return res.status(400).send({message:'Email Already Registered'})
        }
        else{
            const dr = new Compounder(
                {
                    name : req.body.name ,
                   
                    email : req.body.email ,
                    password : req.body.password ,
                    contactnumber:req.body.contactnumber ,
                    docid:req.body.docid
                  
                    
                }
            )
        
            dr.save(err=>{
        
                if(!err)
                {
                   return  res.send({message :'Registration Successful' }  )
                }
                else{
                   return  res.send({message :'Something went wrong' } )
                }
        
        
        
        
            }
        
            )
        
        }
    } )

  


} )












router.post('/login' , (req,res)=>{

    Compounder.find({email:req.body.email , password:req.body.password} , (err,docs)=>{

        if(docs.length>0)
        {
            
            const localsave = {
                name : docs[0].name ,
                _id: docs[0]._id ,
                email:docs[0].email ,
                docid : docs[0].docid,
            }

            res.send(localsave)
        }
        else{
          return  res.status(400).json({message:'Invalid Credentials'})
        }

    } )

} )








router.post('/getcompounderbyid' , (req,res)=>{

    Compounder.find( { docid:req.body.docid } , (err, docs)=>{
        if(!err)
        {
             res.send(docs)
        }
        else
        {
            return res.status(400).json({message:`There's an error ${err.res.data} `})
        }

    } )


} )





router.post('/deletecompounder' , (req,res)=>{

    Compounder.findByIdAndDelete(req.body.compid , (err)=>{

        if(err)
        {
            return res.status(400).json({message:`Something Went Wrong ${err} `})
        }
        else{
            res.send({message:'Deleted Successfully'})
        }

    } )

} );





module.exports =router