const asyncHandler=require('express-async-handler')

const Books=require('../model/booksModel')

const getAllBooks=asyncHandler(async (req,res)=>{
    const books=await Books.find()
    res.json(books)
});

module.exports={
    getAllBooks
}
