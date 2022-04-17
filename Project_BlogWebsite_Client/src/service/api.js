import axios from 'axios';

const URL='http://localhost:6655';

export const createPost= async(post)=>{
    try{
        return await axios.post(`${URL}/create`,post)
    }catch(error){
        console.log("Error while calling createPost API",error);
    }
}

export const getAllPost= async(param)=>{
    try{
        let res= await axios.get(`${URL}/posts${param}`);
      return res.data;
    }catch(error){
        console.log("Error while calling getAllPost API",error);
    }
}

export const getPost= async(id)=>{
    try{
        let res= await axios.get(`${URL}/post/${id}`);
      return res.data;
    }catch(error){
        console.log("Error while calling getPost API",error);
    }
}

export const updatePost= async(id,post)=>{

    try{
        await axios.post(`${URL}/update/${id}`,post)
    }catch(error){
        console.log("Error while calling updatePost API",error);
    }

}

export const deletePost= async(id)=>{

    try{
        await axios.delete(`${URL}/delete/${id}`)
    }catch(error){
        console.log("Error while calling deletePost API",error);
    }

}

export const uploadFile= async(data)=>{

    try{
       return await axios.post(`${URL}/file/upload`,data);
    }catch(error){
        console.log("Error while uploading Image",error);
    }

}

export const newComment= async(data)=>{

    try{
       return await axios.post(`${URL}/comment/new`,data);
    }catch(error){
        console.log("Error while calling newComment API",error);
    }

}

export const getComments= async(id)=>{

    try{
       let res= await axios.get(`${URL}/comments/${id}`);
       return res.data;
    }catch(error){
        console.log("Error while calling getComments API",error);
    }

}

