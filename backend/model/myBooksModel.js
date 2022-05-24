const mongoose=require('mongoose');

const myBooksSchema=mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        //might need to use reference to an other book collection
        book:{
            type:String,
            required: [true,'Book name required']
        },
        status:{
            type:String,
            required:true,
            enum:['read','unread'],
            default:'unread'
        }
    },
    {timestamps:true}
);

module.exports=mongoose.model('MyBooks',myBooksSchema);