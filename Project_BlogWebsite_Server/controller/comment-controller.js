import Comment from "../schema/comment-schema.js";


export const newComment= async(req, res)=>{
 
    try{
     const comment= new Comment(req.body);
    comment.save();
    res.status(200).json('comment saved successfully');
    }catch(error){
        res.status(500).json(error);
    }
    
    }

    export const getComments= async(req, res)=>{
 
        try{
         const comments=Comment.find({postId:req.params.id});
         res.status(200).json(comments);
        }catch(error){
            res.status(500).json(error);
        }
        
        }
