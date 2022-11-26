import { createSlice } from '@reduxjs/toolkit';
import { reportsReducers } from './reducers';
import { ReportsModel, reportsState } from './state';

const reportsSlice = createSlice({
    name: 'reports',
    initialState: reportsState,
    reducers: {
        setReports(state: ReportsModel, action) {
            console.log('setReports', action.payload);
            state.data = action.payload;
        },
    },
});

export const { setReports } = reportsSlice.actions;
export default reportsSlice.reducer;
