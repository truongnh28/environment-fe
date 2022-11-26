import type { User } from '../../services/userAPI';

export type UserModel = {
    user: User;
    isFetching: boolean;
    error: boolean;
};

export const userState = {
    user: null,
    isFetching: false,
    error: false,
};
