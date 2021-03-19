require ('dotenv').config()
const express = require ('express')
const moongoose = require('mongoose')
const cors = require('cors')
const fileupload = require("express-fileupload")
const cookieparser = require ('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieparser())
app.use(cors())
app.use(fileupload({
    useTempFiles:true
}))

//connect to mongo 
mongoose.connect(process.env.MONGODB_URL{
    useNewUrlPhaser = true
    useUnifiedToplogy = true
    useCreateIndex = true
},err =>{
    if(err) throw err;
    console.log('connected to mongodb')
})

//connecting to port
const PORT = process.env.port || 5000
app.listen(PORT,()=>{
    console.log('server is running')
})