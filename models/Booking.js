const mongoose = require('mongoose')

const BookingSchema = mongoose.Schema({

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
        trim:true ,

        require
    } ,
  
    contactnumber : {
        type:Number ,
        require 
    } ,
    age:{
        type:Number ,
        require 
    } ,
    userid:{
        type:String,
        require

    } ,
    _id : { type:String , require } ,
    doctorid:{
        type:String,
        require

    }

})

const Booking = mongoose.model('booking' , BookingSchema )
module.exports = Booking