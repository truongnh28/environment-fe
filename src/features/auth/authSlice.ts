import { createAction, createSlice } from '@reduxjs/toolkit';
export const login = createAction('login');

const authSlice = createSlice({
    name: 'auth',
    initialState: '',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login, (state, action) => {
            //
        });
    },
});

// Actions
export const authAction = authSlice.actions;

// Selectors
// Reducers
// Effects
export default authSlice.reducer;
