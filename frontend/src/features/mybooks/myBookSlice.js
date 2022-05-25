import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import myBookService from './myBookService'



const initialState={
    books:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
};

//add new book
export const addMyBook=createAsyncThunk('mybook/add',async (booksData,thunkAPI)=>{
    try{
        const TOKEN=thunkAPI.getState().auth.user.token;
        return await myBookService.addBook(booksData,TOKEN);
    }
    catch(error){
        const message=(error.response&&error.response.data&&error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

//delete the book
export const deleteMyBook=createAsyncThunk('mybook/delete',async(booksData,thunkAPI)=>{
    try{
        const TOKEN=thunkAPI.getState().auth.user.token;
        return await myBookService.deleteBook(booksData,TOKEN)
    }
    catch(error){
        const message=(error.response&&error.response.data&&error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const bookSlice=createSlice({
    name:'mybooks',
    initialState,
    reducers:{
        reset:state=>initialState
    },
    extraReducers:(builder)=>{
        builder
            .addCase(addMyBook.pending, (state)=>{
                state.isLoading=true
            })
            .addCase(addMyBook.fulfilled, (state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                state.books=action.payload
            })
            .addCase(addMyBook.rejected,(state,action)=>{
                state.isLoading=false
                state.isError=true
                state.message=action.payload
            })
            .addCase(deleteMyBook.pending, state=>{
                state.isLoading=true
            })
            .addCase(deleteMyBook.fulfilled, (state)=>{
                state.isLoading=false
                state.isSuccess=true
            })
            .addCase(deleteMyBook.rejected, (state,action)=>{
                state.isLoading=false
                state.isError=true
                state.message=action.payload
            })
    }
});

export const {reset}=bookSlice.actions
export default bookSlice.reducer