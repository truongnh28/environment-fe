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
