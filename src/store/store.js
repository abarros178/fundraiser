import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../store/slices/auth/authSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
})