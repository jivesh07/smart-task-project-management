const router=require("express").Router(),bcrypt=require("bcryptjs"),jwt=require("jsonwebtoken"),User=require("../models/User");
const token=u=>jwt.sign({userId:u._id},process.env.JWT_SECRET,{expiresIn:"7d"});
router.post("/register",async(req,res)=>{
 try{const {name,email,password}=req.body;
  if(!name||!email||!password)return res.status(400).json({message:"All fields are required."});
  if(password.length<6)return res.status(400).json({message:"Password must be at least 6 characters."});
  if(await User.findOne({email:email.toLowerCase()}))return res.status(409).json({message:"Email already registered."});
  const u=await User.create({name,email:email.toLowerCase(),password:await bcrypt.hash(password,10)});
  res.status(201).json({message:"Account created.",token:token(u),user:{id:u._id,name:u.name,email:u.email}});
 }catch(e){res.status(500).json({message:"Registration failed."})}
});
router.post("/login",async(req,res)=>{
 try{const {email,password}=req.body,u=await User.findOne({email:email?.toLowerCase()});
  if(!u||!(await bcrypt.compare(password||"",u.password)))return res.status(401).json({message:"Invalid email or password."});
  res.json({message:"Login successful.",token:token(u),user:{id:u._id,name:u.name,email:u.email}});
 }catch(e){res.status(500).json({message:"Login failed."})}
});
module.exports=router;