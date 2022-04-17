import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';


const storage= new GridFsStorage({
    url:'mongodb://Sandip:Sandip123@blogwebsite-shard-00-00.saos1.mongodb.net:27017,blogwebsite-shard-00-01.saos1.mongodb.net:27017,blogwebsite-shard-00-02.saos1.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-i07otf-shard-0&authSource=admin&retryWrites=true&w=majority',
    options:{useNewUrlParser:true,useUnifiedTopology:true},

   file: (req, file) =>{
    const match=["image/png","image/jpg"];
    if(match.indexOf(file.memeType)===-1)
    return `${Date.now()}.blog.${file.originalname}`

    return{
        bucketname:"photos",
        filename:`${Date.now()}.blog.${file.originalname}`
    }
   }
 

})
export default multer({storage});






