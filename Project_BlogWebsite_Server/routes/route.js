import express from 'express';
import { createPost,getAllPost,getPost ,updatePost,deletePost} from '../controller/post-controller.js';
import {uploadImage, getImage} from '../controller/Image-controller.js';
import upload from '../utils/upload.js'
import { newComment, getComments } from '../controller/comment-controller.js';



const router=express.Router();

router.post('/create',createPost);
router.get('/posts',getAllPost);
router.get('/post/:id',getPost);
router.post('/update/:id',updatePost);
router.delete('/delete/:id',deletePost);
router.post('/file/upload',upload.single('file'), uploadImage);
router.get('/file/:filename',getImage);
router.post('/comment/new',newComment);
router.get('/comments/:id',getComments);


export default router;