const mongoose=require('mongoose')
const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const form = require('./model')
const route=express.Router()




const My_secretkey='harish.R;'

route.post('/signup',async(req,res)=>{

    try {
         const {username,email,password}=req.body
    const hashed=await bcrypt.hash(password,10)
    const sign= await form.create({username,email,password:hashed})
    res.status(200).json({message:"succes",sign})
        
    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
   
})



 
 



route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await form.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      My_secretkey,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login success",
      token: token,
      email: user.email,

    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



 



 

 

route.get('/profile',middleware,async(req,res)=>{
   try {
     const user= await form.findById(req.user).select('-password')
     
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log(user)
    res.json(user)

   } catch (error) {
     res.status(404).json({message:error.message})
   }
})




function middleware(req,res,next){
    const authh = req.headers.authorization
    if (authh && authh.startsWith('Bearer')) {
           try {
          const  token = authh.split(' ')[1]   
            const decoded = jwt.verify(token,My_secretkey)
            req.user = decoded.id
            next()
           } catch (error) {
            return res.status(404).json({message:error.messge})
           }       
    } else {
        return res.status(404).json({success:false})
    }
}
 


route.get('/',async(req,res)=>{
  const user = await form.findById(req.user).select('-password')
})

module.exports=route;

