const asyncHandler=require('express-async-handler')

const Books=require('../model/booksModel')

const getAllBooks=asyncHandler(async (req,res)=>{
    const books=await Books.find()
    res.json(books)
});

const getBooksOnCategory=asyncHandler(async (req,res)=>{
    const category=req.params.category
    const bookq=await Books.find({genre:category})
    res.json(bookq)
})

module.exports={
    getAllBooks,
    getBooksOnCategory
}
