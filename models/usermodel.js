const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name:{
        type:String,
        require
    } ,
    lname :{
        type:String,
        require
    } ,

    email:{
        type:String,
       

        require
    } ,
    password:{
        type:String,
        require
    } ,
    contactnumber : {
        type:Number ,
        require 
    }
    
    



} ,  {timestamps:true } )

const User = mongoose.model('users',userSchema)

module.exports=User