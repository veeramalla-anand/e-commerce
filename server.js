require ('dotenv').config()
const express = require ('express')
const mongoose = require('mongoose')
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
//routes
app.use('/user',require('./backend/routers/userRouter'))

//connect to mongo 
mongoose.connect('mongodb://localhost:27017/ECOMapp', {
    useNewUrlParser:true,
    useUnifiedToplogy:true,
    useCreateIndex:true,
}) 
.then(() =>{
    console.log('connected to mongodb')
});

app.get ('/',(req,res) => {
    res.json({msg:"welcome anand"})
})

//connecting to port
const PORT = process.env.port || 5000
app.listen(PORT,()=>{
    console.log('server is running')
})