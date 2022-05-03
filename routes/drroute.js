const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const multer = require('multer')
const Doctor = require('../models/doctormodel')



const storage = multer.diskStorage({
    //destination for files
    destination: function (request, file, callback) {
        callback(null, './public/images/');
      },
  
    //add back the extension
    filename: function (request, file, callback) {
      callback(null, Date.now() + file.originalname);
    },
  });
  
  //upload parameters for multer
  const upload = multer({
    storage: storage,
    limits: {
      fieldSize: 1024 * 1024 * 3,
    },
  }).single('image')



router.get('/getalldoctors' , (req,res)=>{
    Doctor.find( {status:'true'} , (err,docs)=>{
        if(err)
        {
            return  res.status(400).json({message:`Something Went Wrong ${err} `})
        }
        else{
            res.send(docs)
        }
    } )
} )




router.get('/getalldoctorsreq' , (req,res)=>{
    Doctor.find( {status:'false'} , (err,docs)=>{
        if(err)
        {
            return  res.status(400).json({message:`Something Went Wrong ${err} `})
        }
        else{
            res.send(docs)
        }
    } )
} )





router.post('/approvedr' , (req,res)=>{

    // console.log('Body is' , req )
    Doctor.findByIdAndUpdate( req.body.doctorid , 
        { status : 'true' ,
            
        
        }  ,   (err,docs)=>{
        if(err)
        return res.status(400).json({message:`Something Went Wrong while updating doc ${err} `})

        else{
            
            //alert(docs)
            res.send({message:`Doctor Approved Successfully  `})
        }

    } )
} )





router.post('/register', upload, (req,res)=>{


    Doctor.find({email:req.body.email} , (err,docs)=>{
        if(docs.length>0)
        {
            return res.status(400).send({message:'Email Already Registered'})
        }
        else{
            const dr = new Doctor(
                {
                    name : req.body.name ,
                    lname : req.body.lname ,
                    email : req.body.email ,
                    password : req.body.password ,
                    contactnumber:req.body.contactnumber ,
                    fees:req.body.fees , 
                    college:req.body.college ,
                    experience : req.body.experience ,
                    field :req.body.field ,
                    address : req.body.address ,
                   //image:req.file.filename ,
                    image:req.body.image ,
                    description:req.body.description ,
                    start1 : req.body.start1 , 
                    start2 : req.body.start2 , 
                    end1 : req.body.end1 , 
                    end2 : req.body.end2 , 
                    val1 : req.body.val1 , 
                    val2 : req.body.val2 , 
                    val3 : req.body.val3 , 
                    val4 : req.body.val4 , 

                    status:"false"
                    
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

    Doctor.find({email:req.body.email , password:req.body.password} , (err,docs)=>{

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





router.post('/getdoctorbyid' , (req,res)=>{


    
    Doctor.find( {_id : req.body.doctorid} , (err, docs)=>{
        if(!err)
        {
             res.send(docs[0])
        }
        else
        {
            return res.status(400).json({message:`There's an error ${err} `})
        }

    } )
} )


router.post('/getdoctorbycategory' , (req,res)=>{


    
    Doctor.find( {field : req.body.category} , (err, docs)=>{
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








router.post('/addreview' , async(req,res)=>{
    const {review , doctorid, nowuser} = req.body

    const doc = await Doctor.findById({_id:doctorid})

    const reviewmodel ={
        name : nowuser.name ,
        userid : nowuser._id ,
        comment : review.comment
    
    
    }

    doc.reviews.push(reviewmodel)

    doc.save( err=>{
        if(err)
        {
            return res.status(400).json({message:`Something Went Wrong  `})
        }
        else{
            res.send({message:'Review Submitted Successfully'})
        }
    } )



} );


router.post('/updatedoctor' , (req,res)=>{
    Doctor.findByIdAndUpdate(req.body.doctorid , {
        name : req.body.updatedproduct.name ,
        lname : req.body.updatedproduct.lname ,
        fees : req.body.updatedproduct.fees ,
        email : req.body.updatedproduct.email ,
        description : req.body.updatedproduct.description ,
        contactnumber :req.body.updatedproduct.contactnumber ,
        college :req.body.updatedproduct.college ,
        experience :req.body.updatedproduct.experience ,
        field :req.body.updatedproduct.field ,
        address :req.body.updatedproduct.address ,
        status :req.body.updatedproduct.status ,
        image :req.body.updatedproduct.image ,
    } ,  (err)=>{
        if(err)
        return res.status(400).json({message:`Something Went Wrong ${err} `})

        else{
            res.send({message:'Doctor Updated Successfully'})
        }

    } )
} )


module.exports =router