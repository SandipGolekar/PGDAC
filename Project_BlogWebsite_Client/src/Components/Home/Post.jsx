import { Box ,Typography,makeStyles} from "@material-ui/core";

const useStyles=makeStyles({
container:{
height:350,
margin:10,
borderRadius:10,
border:'1px solid #d3cede',
display:'flex',
alignItems:'center',
flexDirection:'column',
'& > *': {
    padding:'0 5px 5px 5px'
},
},
emage:{
    height:150,
    width:'100%',
    objectFit:'cover',
    borderRadius:'10px 10px 0 0'
},
text:{
    color:'#878787',
    fontSize:12,
},
heading:{
    fontSize:18,
    fontWeight:500,
    textAlign:'center'
},
detail:{
    fontSize:14,
    wordBreak:'break-word',
},
})
const Post=({post})=>{
    const classes=useStyles();
    // post.picture ||
const url=post.picture ? post.picture:'https://www.blogfundas.com/wp-content/uploads/2018/04/start-a-blog-cover.jpeg';
const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0,limit)+ '...' : str;
}
    return(
<Box className={classes.container}>
    <img src={url} alt="wrapper" className={classes.emage}/>
<Typography className={classes.text}>{post.categories}</Typography>
<Typography className={classes.heading}>{addElipsis(post.title,20)}</Typography>
<Typography className={classes.text}>Author:{post.username}</Typography>
<Typography className={classes.detail}>{addElipsis(post.description,100)}</Typography>
</Box>
    )
}
export default Post;

