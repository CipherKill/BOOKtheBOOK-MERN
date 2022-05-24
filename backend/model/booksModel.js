const mongoose=require('mongoose');

const booksSchema=mongoose.Schema({
    cover:{
        type:String,
        required:[true,'Cover missing']
    },
    name:{
        type:String,
        required:[true,'Name missing']
    },
    author:{
        type:String,
        required:[true,'Author missing']
    },
    rating:{
        type:String,
        required:[true,'Rating missing']
    },
    genre:{
        type:String,
        required:[true,'Genre missing']
    }

},{timestamps:false});

module.exports=mongoose.model('books',booksSchema);