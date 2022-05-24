const express=require('express')
const router=express.Router()

const {protect}=require('../middleware/authMiddleware');
const {getMyBooks,addMyBooks,deleteMyBooks,getBookDetails}=require('../controllers/myBooksController');

router.get('/',protect,getMyBooks).post('/',protect,addMyBooks)
router.route('/:id').delete(protect,deleteMyBooks).get(getBookDetails)

module.exports=router