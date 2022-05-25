import axios from 'axios'

const API_URL='/api/mybooks/';

//Add book to mybooks
const addBook=async(bookData,token)=>{

    const config={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response=await axios.post(API_URL,bookData,config);
    return response.data
};

const deleteBook=async(bookData,token)=>{
    const config={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }
    const response=await axios.delete(API_URL+bookData,config)
    return response.data
}

const myBookService={
    addBook,
    deleteBook
};

export default myBookService;