const express=require('express')
const router=express.Router()

const {protect}=require('../middleware/authMiddleware');
const {getMyBooks,addMyBooks}=require('../controllers/myBooksController');

router.get('/',protect,getMyBooks).post('/',protect,addMyBooks)

module.exports=router