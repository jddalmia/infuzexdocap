const mongoose = require('mongoose')


const account = mongoose.Schema({

    userid:{
        type:mongoose.Schema.Types.ObjectId
    } ,
    name:{
        type:String ,
        require :true
    } 
  


} , {
    timestamps:true
} )


const CompounderSchema = mongoose.Schema({

    docid:{
        type:String,
        require
    },

    name:{
        type:String,
        require
    } ,
    

    email:{
        type:String,
        trim:true ,

        require
    } ,
    password:{
        type:String,
        require
    } ,
    contactnumber : {
        type:Number ,
        require 
    } ,
    doctors:account




} , {
    timestamps:true
} )

const Compounder = mongoose.model('compounder' , CompounderSchema )

module.exports = Compounder