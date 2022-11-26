import type { User } from '../../services/userAPI';

export type ReportModel = {
    user: User;
    isFetching: boolean;
    error: boolean;
};

export const reportState = {
    user: null,
    isFetching: false,
    error: false,
};
