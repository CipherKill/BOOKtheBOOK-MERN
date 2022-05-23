const asyncHandler=require('express-async-handler')

const User=require('../model/userModel')
const MyBooks=require('../model/myBooksModel');

//@desc     get my books
//@route    /api/mybooks
//@access   Private
const getMyBooks=asyncHandler(async(req,res)=>{
    //get user using his id
    const user=await User.findById(req.user.id);
    if(!user){
        res.status(400);
        throw new Error('User not found');
    }
    const mybooks=await MyBooks.find({user:req.user.id});
    res.status(200).json(mybooks);
});

//@desc     add my books
//@route    /api/mybooks POST
//@access   Private
const addMyBooks=asyncHandler(async(req,res)=>{
    const {book}=req.body;

    if(!book){
        res.status(400);
        throw new Error('Issue with book registration');
    }
    //get user using his id
    const user=await User.findById(req.user.id);
    if(!user){
        res.status(400);
        throw new Error('User not found');
    }

    const bookData=await MyBooks.create({
        book,
        user:req.user.id,
        status:'unread'
    });

    res.status(201).json(bookData);
});


module.exports={
    getMyBooks,
    addMyBooks
}