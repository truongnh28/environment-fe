import axiosClient from './axiosClient';
export type User = {
    username: string;
    passwork: string;
};
export const userAPI = {
    async login(account: User) {
        const url = '/auth/login';
        const res = await axiosClient.post(url, account);
        return res;
    },
};
