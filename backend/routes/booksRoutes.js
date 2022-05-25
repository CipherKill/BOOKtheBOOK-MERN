const express=require('express')
const router=express.Router()

const {getAllBooks,getBooksOnCategory}=require('../controllers/booksController');

router.get('/all',getAllBooks);
router.get('/:category',getBooksOnCategory)

module.exports=router;