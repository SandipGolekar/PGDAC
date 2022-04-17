import {useState, useEffect} from 'react';
import { Box,makeStyles ,Typography} from "@material-ui/core";
import {Edit,Delete} from '@material-ui/icons'
import { Link ,useHistory,useParams} from "react-router-dom";
import {getPost ,deletePost} from '../../service/api'

import Comments from '../comments/Comments';
const useStyles=makeStyles((theme)=>({
    containr:{
padding:'0 100px',
[theme.breakpoints.down('md')]:{
    padding:0,
}
    },
image:{
width:'100%',
height:'50vh',
objectFit:'cover',
},
icons:{
float:'right',
},
icon:{
margin:5,
border:'1px solid #878787',
padding:5,
borderRadius:10,
},
heading:{
    fontSize:30,
fontWeight:500,
textAlign:'center',
margin:'50px 0 10px 0'
},
subheading:{
    color:'#878787',
    display:'flex',
    margin:'20px 0',
    [theme.breakpoints.down('sm')]:{
        display:'block',
    },
},
Link:{
    textDecoration:'none',
    color:'inherit'
}
}))


const DetailView=()=>{
    const {id}=useParams();
    const classes=useStyles();
 const history=useHistory();
 const [post, setPost]=useState({});

 const url=post.picture ? post.picture:'https://cdn.pixabay.com/photo/2017/04/09/09/29/blog-2215254_960_720.jpg';

 useEffect(()=>{
const fetchData = async ()=>{
  let data= await getPost(id);
  console.log(data);
  setPost(data);
}
fetchData();
}, [])

const deleteBlog= async()=>{
    await deletePost(post._id);
    history.push('/')
}



return(
        <Box className={classes.containr}>
            <img src={post.picture || url} alt="banner" className={classes.image}/>
        <Box className={classes.icons}>
            <Link to={`/update/${post._id}`}><Edit className={classes.icon} color="primary"/></Link>
            <Delete onClick={() => deleteBlog()} className={classes.icon} color="error"/>
        </Box>
        <Typography className={classes.heading}>{post.title}</Typography>
        <Box className={classes.subheading}>
       <Link to={`/?username=${post.username}`} className={classes.Link}>
        <Typography >Author:<span style={{fontWeight:600}}>{post.username}</span></Typography>  
       </Link>
        <Typography style={{marginLeft:'auto'}} >{new Date(post.createDate).toDateString()}</Typography>
        </Box>
        <Typography>{post.description}</Typography>
        <Comments post={post}/>
        </Box>
    )
    
    }
     export default DetailView;


