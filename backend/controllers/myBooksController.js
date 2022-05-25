const asyncHandler=require('express-async-handler')

const User=require('../model/userModel')
const MyBooks=require('../model/myBooksModel');
const Books=require('../model/booksModel')


//@desc     get my books
//@route    /api/mybooks GET
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


//@desc     remove an added book
//@route    /api/books/:id
//@access   private
const deleteMyBooks=asyncHandler(async (req,res)=>{
    const user=await User.findById(req.user.id);
    if(!user){
        res.status(400);
        throw new Error('User not found');
    }
    const book=await MyBooks.find({book:req.params.id,user:req.user.id});
    const abook=book[0]
    if(!abook){
        res.status(400);
        throw new Error('Book not found');
    }    
    if(abook.user.toString()!==req.user.id){
        console.log('user nomatched')
        res.status(400);
        throw new Error('Not Authorized');
    }

    await abook.remove()

    res.status(200).json({success:true});
});

//@desc     get my books only
//@route    /api/mybooks GET
//@access   Private
const getBookDetails=asyncHandler(async(req,res)=>{
    const books=await MyBooks.find({user:req.params.id});

    let bookdetails=[];
    for(let i=0;i<(books.length);i++){
        bookdetails.push(await Books.find({_id:books[i].book}));
    }


    res.status(200).json(bookdetails);
});

module.exports={
    getMyBooks,
    addMyBooks,
    deleteMyBooks,
    getBookDetails
}