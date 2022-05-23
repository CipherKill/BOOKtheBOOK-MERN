import axios from 'axios'

// const DOMAIN='http://localhost:3001'
const API_URL='/api/users/';

//Register user
const register=async (userData)=>{
    const response=await axios.post(API_URL+'register',userData);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }
    return response.data;
}

//Login user

//Logout user
const logout=()=>localStorage.removeItem('user');

const authService={
    register,
    logout
}

export default authService;