const jwt=require("jsonwebtoken");
module.exports=(req,res,next)=>{
 try{
  const h=req.headers.authorization;
  if(!h?.startsWith("Bearer ")) return res.status(401).json({message:"Login required."});
  const d=jwt.verify(h.split(" ")[1],process.env.JWT_SECRET); req.userId=d.userId; next();
 }catch(e){res.status(401).json({message:"Invalid or expired token."})}
};