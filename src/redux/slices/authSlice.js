import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: false,
}

// REDUCER
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Actions
        authSuccess: (state, action) => {
            state.isAuthenticated = true
            state.user = action.payload
            state.isLoading = false
        },
        authFailure: (state, action) => {
            state.isAuthenticated = false
            state.isLoading = false
        },
        authLoading: (state, action) => {
            state.isLoading = action.payload
        },
        authLogout: (state, action) => {},
    },
})

// ACTION
export const { authSuccess, authFailure, authLoading } = authSlice.actions

// Selectors - This is how we pull infomation from the Global store slice
export const selectUser = (state) => {
    return state.user
}
