const mongoose = require('mongoose')

var mongodburl = 'mongodb+srv://awanish:awanishmishra3@cluster0.wxhyc.mongodb.net/doctrap'

mongoose.connect(mongodburl , { useUnifiedTopology:true , useNewUrlParser:true })

var dbconnect = mongoose.connection

dbconnect.on( 'error' ,()=>{
    console.log('Mogo DB connection failed')
} )

dbconnect.on('connected' , ()=>{
    console.log('connection passed Doctrap'  )
} )

mongoose.exports = mongoose

