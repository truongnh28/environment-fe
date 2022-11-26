import { createSlice } from '@reduxjs/toolkit';
import { userReducers } from './userReducers';
import { userState } from './userState';

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: userReducers,
    extraReducers: (builder) => {
        builder.addCase(login, (state, action) => {
            //
        });
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
