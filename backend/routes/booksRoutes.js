const express=require('express')
const router=express.Router()

const {getAllBooks}=require('../controllers/booksController');

router.get('/all',getAllBooks);

module.exports=router;