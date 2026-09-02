const router=require("express").Router(),Task=require("../models/Task"),auth=require("../middleware/auth");
router.use(auth);
router.get("/",async(req,res)=>{
 try{const {status="All",search=""}=req.query,f={user:req.userId};
  if(status!=="All")f.status=status;if(search.trim())f.title={$regex:search.trim(),$options:"i"};
  res.json(await Task.find(f).sort({createdAt:-1}));
 }catch(e){res.status(500).json({message:"Could not load tasks."})}
});
router.post("/",async(req,res)=>{
 try{const {title,description,priority,status,dueDate}=req.body;
  if(!title?.trim())return res.status(400).json({message:"Task title is required."});
  res.status(201).json(await Task.create({title:title.trim(),description,priority,status,dueDate,user:req.userId}));
 }catch(e){res.status(400).json({message:"Could not create task."})}
});
router.put("/:id",async(req,res)=>{
 try{const {title,description,priority,status,dueDate}=req.body;
  const t=await Task.findOneAndUpdate({_id:req.params.id,user:req.userId},{title:title?.trim(),description,priority,status,dueDate},{new:true,runValidators:true});
  if(!t)return res.status(404).json({message:"Task not found."});res.json(t);
 }catch(e){res.status(400).json({message:"Could not update task."})}
});
router.patch("/:id/status",async(req,res)=>{
 try{const t=await Task.findOneAndUpdate({_id:req.params.id,user:req.userId},{status:req.body.status},{new:true,runValidators:true});
  if(!t)return res.status(404).json({message:"Task not found."});res.json(t);
 }catch(e){res.status(400).json({message:"Invalid status."})}
});
router.delete("/:id",async(req,res)=>{
 try{const t=await Task.findOneAndDelete({_id:req.params.id,user:req.userId});
  if(!t)return res.status(404).json({message:"Task not found."});res.json({message:"Task deleted."});
 }catch(e){res.status(400).json({message:"Could not delete task."})}
});
module.exports=router;