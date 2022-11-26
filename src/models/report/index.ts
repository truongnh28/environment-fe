import { createSlice } from '@reduxjs/toolkit';
import { reportReducers } from './reducers';
import { reportState } from './state';

const reportSlice = createSlice({
    name: 'report',
    initialState: reportState,
    reducers: reportReducers,
});

export const { setReport } = reportSlice.actions;
export default reportSlice.reducer;
