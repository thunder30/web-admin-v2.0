import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    user: null,
    isLoading: true,
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
        authFailure: (state, _) => {
            state.isAuthenticated = false
            state.isLoading = false
        },
        authLoading: (state, action) => {
            state.isLoading = action.payload
        },
        authLogout: (state, _) => {
            state.user = null
        },
    },
})

// ACTION
export const { authSuccess, authFailure, authLoading, authLogout } =
    authSlice.actions

// Selectors - This is how we pull infomation from the Global store slice
export const selectUser = (state) => {
    return state.auth.user
}

export const selectLoading = (state) => {
    return state.auth.isLoading
}

export const selectAuthenticated = (state) => {
    return state.auth.isAuthenticated
}

export default authSlice.reducer
