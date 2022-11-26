import { createSlice } from '@reduxjs/toolkit';
import { userReducers } from './reducers';
import { userState } from './state';

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: userReducers,
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
