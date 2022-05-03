const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')


const User = require('../models/usermodel')

router.post('/register', (req,res)=>{


    User.find({email:req.body.email} , (err,docs)=>{
        if(docs.length>0)
        {
            return res.status(400).send({message:'Email Already Registered'})
        }
        else{
            const user = new User(
                {
                    name : req.body.name ,
                    lname : req.body.lname ,
                    email : req.body.email ,
                    password : req.body.password ,
                    contactnumber:req.body.contactnumber
                }
            )
        
            user.save(err=>{
        
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

    User.find({email:req.body.email , password:req.body.password} , (err,docs)=>{

        if(docs.length>0)
        {
            
            const localsave = {
                name : docs[0].name ,
                _id: docs[0]._id ,
                email:docs[0].email
            }

            res.send(localsave)
        }
        else{
          return  res.status(400).json({message:'Invalid Credentials'})
        }

    } )

} )


router.post('/update' , (req,res)=>{
    const {userid , userupdate} = req.body
    User.findByIdAndUpdate({_id : userid} , {
        name : userupdate.name ,
        email: userupdate.email ,
        password :userupdate.password
    } , (err)=>{

        if(err)
        {
            return  res.status(400).json({message:`Couldn't update user  `})

        }
        else{
            res.send({message :'Updated Successfully' } )
        }

    }  )
} )


router.get('/getalluser' , (req,res)=>{
    User.find( {} , (err,docs)=>{
        if(err)
        {
            return  res.status(400).json({message:`Something Went Wrong  `})
        }
        else{
            res.send(docs)
        }
    } )
} )


router.post('/deleteuser' , (req,res)=>{
    User.findByIdAndRemove(req.body.userid , (err)=>{
        if(err)
        {
            return  res.status(400).json({message:`Something Went Wrong  `})
        }
        else{
            res.send({message :'Deleted Successfully' } )
        }
    } )
} )

module.exports = router