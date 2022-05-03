const express = require('express')
const bodyparser= require('body-parser')
const app = express()

var useroroute = require('./routes/useroute')
var drroute = require('./routes/drroute')
var bookingroute = require('./routes/bookingroute')
var adminroute = require('./routes/adminroute')
var compounderroute = require('./routes/comounderroute')
app.use(bodyparser.json())
const path=require('path')
let dbconnection = require('./auth')








app.use('/api/users/' , useroroute )

app.use('/api/doctor/' , drroute )

app.use('/api/admin' , adminroute )
app.use('/api/compounder/' , compounderroute )


if(process.env.NODE_ENV==='production')

{
    app.use('/' , express.static('client/build') )
    app.get('*' , (req,res)=>{
        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    } )
}




const port = process.env.PORT ||  7000 ;

var server = app.listen( port , ()=>{
    console.log('Server started of Doctrap')
} )
