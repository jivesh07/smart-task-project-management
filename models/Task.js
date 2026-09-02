const mongoose=require("mongoose");
module.exports=mongoose.model("Task",new mongoose.Schema({
 title:{type:String,required:true,trim:true,maxlength:120},
 description:{type:String,trim:true,maxlength:500,default:""},
 priority:{type:String,enum:["Low","Medium","High"],default:"Medium"},
 status:{type:String,enum:["Todo","In Progress","Completed"],default:"Todo"},
 dueDate:{type:Date,default:null},
 user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}
},{timestamps:true}));