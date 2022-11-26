import { createSlice } from '@reduxjs/toolkit';
import { userReducers } from './userReducers';
import { userState } from './userState';

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: userReducers,
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
