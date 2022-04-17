import {useState, useEffect} from "react";
import { TextareaAutosize } from "@material-ui/core";
import { Box,makeStyles,FormControl,InputBase,Button } from "@material-ui/core";
import { AddCircle} from "@material-ui/icons";
import { useHistory } from 'react-router-dom';
import { createPost,uploadFile } from "../../service/api";


const useStyles=makeStyles((theme)=>({
    containr:{
padding:'0 100px',
[theme.breakpoints.down('md')]:{
    padding:0,
}
    },
image:{
width:'100%',
height:'60vh',
objectFit:'cover',
},
form:{
    display:'flex',
    flexDirection:'row',
    marginTop:10,
},
textField:{
    flex:1,
    margin:'0 30px',
    fontSize:25,
},
textarea:{
    width:'100%',
    marginTop:40,
    border:'none',
    fontSize:18,
    '&:focus-visible':{
        outline:'none',
    }
}
}));
const initialvalues={
    title:'',
    description:'',
    picture:'',
    username:'sandipgolekar',
    categories:'All',
    createDate:new Date()
}

 const CreateView=()=>{
     
    const classes=useStyles();
 
 const history=useHistory();
 const [post, setPost]=useState(initialvalues);
 const [file, setFile]=useState('');
const [image, setImage]=useState('');
const url=post.picture ? post.picture :'https://thumbs.dreamstime.com/z/creative-futuristic-online-education-interface-immersive-over-blurry-blue-background-planet-hologram-concept-e-learning-180477973.jpg';

 useEffect(()=>{
    const getImage = async ()=>{
        console.log(file);
       if(file){
           const data=new FormData();
           data.append("name",file.name);
           data.append("file",file);
          const image= await uploadFile(data);
          post.picture=image.data;
          setImage(image.data);
       }
    }
    getImage();
    }, [file])



const handleChange=(e)=>{
    setPost({ ...post,[e.target.name]:e.target.value})
}
const savePost=async()=>{
   await createPost(post);
   history.push('/')
}


return(
           <Box className={classes.containr}>
               <img className={classes.image} src={url} alt="banner" />
               <FormControl className={classes.form}>
                   <label htmlFor="fileInput">
                   <AddCircle fontSize="large" color="action" />
                   </label>
                   <input 
                   type="file" 
                   id="fileInput" 
                   style={{display:'none'}}
                   onChange={(e)=>setFile(e.target.files[0])}
                   />
               
                   <InputBase 
                    onChange={(e)=> handleChange(e)}
                    placeholder="Title"
                    className={classes.textField}
                    name='title'
                    />
                   <Button onClick={()=>savePost()} variant="contained" color="primary">Publish</Button>
               </FormControl>
           <TextareaAutosize
             minRows={5}
             placeholder="Tell your story here....."
             className={classes.textarea}
             onChange={(e)=> handleChange(e)}
             name="description"
           />
           </Box>
    )
}
export default CreateView;

