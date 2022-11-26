import axiosClient from './axiosClient';

export const authAPI = {
    async login(account) {
        const url = '/auth/login';
        const res = await axiosClient.post(url, account);
        return res;
    },
};
