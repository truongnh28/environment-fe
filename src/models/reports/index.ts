import { createSlice } from '@reduxjs/toolkit';
import { reportsReducers } from './reducers';
import { reportsState } from './state';

const reportsSlice = createSlice({
    name: 'report',
    initialState: reportsState,
    reducers: reportsReducers,
});

export const { setReports } = reportsSlice.actions;
export default reportsSlice.reducer;
