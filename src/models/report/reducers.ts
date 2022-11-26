import { Report } from 'services/reportAPI';
import { ReportModel } from './state';

export const reportReducers = {
    setReport: (state: ReportModel, newReport: Report) => ({
        ...state,
        data: newReport,
    }),
};
