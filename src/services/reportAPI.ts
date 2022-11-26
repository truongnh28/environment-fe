import axiosClient from './axiosClient';

export type Report = {
    id: number;
    title: string;
    description: string;
    priority: number;
    user_name: string;
    city: string;
    district: string;
    street: string;
    ward: string;
    status?: string;
    address: string;
    lag: number;
    lng: number;
};

export const reportAPI = {
    async getReports() {
        const url = '/report/get_all';
        const res = await axiosClient.get(url);
        return res;
    },
};
