import axios from 'axios'

const API_URL='/api/mybooks/';

//Add book to mybooks
const addBook=async(ticketData,token)=>{

    const config={
        headers:{
            Authorization: `Bearer ${token}`
        }
    }

    const response=await axios.post(API_URL,ticketData,config);
    return response.data
};

const myBookService={
    addBook
};

export default myBookService;