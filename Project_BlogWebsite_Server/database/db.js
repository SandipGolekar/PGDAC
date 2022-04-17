import mongoose from 'mongoose'


const Connection=async()=>{
    try{
        const URL='mongodb://Sandip:Sandip123@blogwebsite-shard-00-00.saos1.mongodb.net:27017,blogwebsite-shard-00-01.saos1.mongodb.net:27017,blogwebsite-shard-00-02.saos1.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-i07otf-shard-0&authSource=admin&retryWrites=true&w=majority'
       await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true});
       console.log("Database Connected Successfully")

    }catch(error){
        console.log("Error while connecting mongodb",error);
    }
}
export default Connection;
