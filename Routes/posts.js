const express=require("express");
const router=express.Router();
const Post=require("../Db/models/model")
// Get Back All the POSTS
router.get("/", async (req,res)=>{
    try{
  const posts= await Post.find()
  res.json(posts)
  } catch(err){
    res.json({message:err})
  }
})
// Submit A Post
router.post("/", async (req,res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });
    try{
        const savedPost=await post.save();
    } catch(err){
        res.json({message:err})
    }
})
// Specific Post
router.get("/:postId",async (req,res)=>{
    try{
        const post=  await  Post.findById(req.params.postId)
        res.json(post)
    }catch(err){
        res.json({message:err})
    }

})
// delete a specific post
router.delete('/:postId',async (req,res)=>{
    try{
        const removedPost= await Post.remove({_id:req.params.postId})
        res.json(removedPost)
    }
    catch(err){
        res.json({message:err})
    }

});
// update a post 
router.patch("/:postId", async (req,res)=>{
    try{
    const updatedpost= await Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title}})
        res.json(updatedpost)
    }
    catch(err){
        res.json({message:err})
    }
});
module.exports=router;