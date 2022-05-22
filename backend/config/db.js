const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGOOSE_URI);
        console.log(`MongoDB Connected: ${conn.connectin.host}`.cyan.underline);
    }
    catch(error){
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};

module.exports=connectDB;