const express = require('express')
const server = express()
const mongoose=require('mongoose')
const cors = require('cors')
const form=require('./routes')

server.use(cors())
server.use(express.json())
mongoose.connect('mongodb://localhost:27017/jwtform')
.then(()=>console.log('mongodb is connected'))
.catch((err)=>console.log('mongodb is not connected',err))

server.use('/api/auth',form)






server.listen(8000,()=>console.log('server is listening'))