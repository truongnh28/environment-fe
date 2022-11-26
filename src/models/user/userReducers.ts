import { userState } from './userState';

export const userReducers = {
    logout: () => {
        localStorage.removeItem('user');
        return {
            ...userState,
        };
    },
};
