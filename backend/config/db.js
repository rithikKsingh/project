require("dotenv").config();

const mongoose=require("mongoose");

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("Mongodb connected successfully")
    } catch (error) {
        console.error("Mongo conection failed");
        process.exit(1);
    }
}

module.exports=connectDB;