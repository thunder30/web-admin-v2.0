import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
// import bookingReducer from './slices/bookingSlice'
// import pitchBranchReducer from './slices/pitchBranchSlice'
// import blogReducer from './slices/blogSlice'

// THE GLOBAL STORE SETUP

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})
