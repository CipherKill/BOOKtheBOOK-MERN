import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import bookReducer from '../features/mybooks/myBookSlice'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    mybooks:bookReducer
  },
});
