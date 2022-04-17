import { useState ,useEffect} from "react";
import { Box ,Button,TextareaAutosize,makeStyles} from "@material-ui/core";
import { newComment,getComments } from "../../service/api";
import Comment from "./Comment";



const useStyles=makeStyles({
    component:{
      marginTop:100,
      display:'flex',
    },
    image:{
        width:50,
        height:50,
        borderRadius:'50%'
    },
    textarea:{
        width:'100%',
        margin:'0 20px'
    },
    button:{
        height:40
    }
})

const initialvalue={
    name:'',
    postId:'',
    date: new Date(),
    comments:''
}



const Comments=({post})=>{
    const classes=useStyles();
const url='https://cdn4.iconfinder.com/data/icons/man-user-human-person-business-profile-avatar/100/20-1User_13-512.png'

const [comment, setComment]=useState(initialvalue);

const [comments, setComments]=useState([]);
useEffect(()=>{
  const getData=async()=>{
     let res= await getComments(post._id)
     setComments(res);
  }
  getData();
},[])

const handleChange=(e)=>{
   setComment({
       ...comment,
       name:post.username,
       postId:post._id,
       comments:e.target.value
   })

}
const postComment= async()=>{
   await newComment(comment);
}

return(
    <Box >
        <Box className={classes.component}>
            <img src={url} alt="dp" className={classes.image}/>
            <TextareaAutosize 
            className={classes.textarea}
            rowsMin={5}
            onChange={(e)=>handleChange(e)}
            />
            <Button
              variant="contained"
              color="primary"
              size="medium"
              className={classes.button}
              onClick={()=>postComment()}
            >Post</Button>
        </Box> 
        {
            comments && comments.map(comment=>(
                <Comment/>
            ))
        }
    </Box>
)

}
export default Comments;
