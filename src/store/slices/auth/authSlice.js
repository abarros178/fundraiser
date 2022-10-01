import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', //checking -  not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMenssage: null,

    },
    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.errorMenssage = action.payload.errorMenssage;
        },
        logout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMenssage = payload.errorMenssage ?? 'cerrado por el usuario';
        },
        checkingCredentials: (state, action) => {
            state.status = 'checking';
        },
    }
});


// Action creators are generated for each case reducer function
export const { checkingCredentials, login, logout } = authSlice.actions;