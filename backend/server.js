const express= require('express');
const dotenv=require('dotenv').config();
const colors=require('colors');
const connectDB=require('./config/db');
const {errorHandler}=require('./middleware/errorMiddleware');
const PORT=process.env.PORT || 4444;

//Connect to database
connectDB();

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/users',require('./routes/userRoutes'));
app.use('/api/mybooks',require('./routes/myBooksRoutes'));

//api testing route ONLY
app.get('/',(req,res)=>{
    res.status(200).json({data:"api is updated and active"})
});

app.use(errorHandler) // for error handling

app.listen(PORT,()=>console.log(`Server listening on port ${PORT}...`))