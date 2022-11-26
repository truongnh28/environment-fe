import { createSlice } from '@reduxjs/toolkit';
import { Report } from 'services/reportAPI';
import { reportReducers } from './reducers';
import { ReportModel, reportState } from './state';

const reportSlice = createSlice({
    name: 'report',
    initialState: reportState,
    reducers: {
        setReport(state: ReportModel, action) {
            return { ...state, data: action.payload };
        },
    },
});

export const { setReport } = reportSlice.actions;
export default reportSlice.reducer;
