import type { Report } from '../../services/reportAPI';

export type ReportsModel = {
    data: Report[];
    isFetching: boolean;
    error: boolean;
};

export const reportsState: ReportsModel = {
    data: [
        {
            id: 1,
            title: 'con chim non',
            description: 'trên cành cây hót líu lo',
            priority: 1,
            user_name: 'nhontq',
            city: 'TP Ho Chi Minh',
            district: 'Quan 10',
            street: 'Cach Mang T8',
            ward: 'Man Thien',
            address: 'so 5 duong 102',
            lag: 10.782222,
            lng: 106.70278,
        },
        {
            id: 2,
            title: 'con chim non',
            description: 'trên cành cây hót líu lo',
            priority: 1,
            user_name: 'nhontq',
            city: 'TP Ho Chi Minh',
            district: 'Quan 10',
            street: 'Cach Mang T8',
            ward: 'Man Thien',
            address: 'so 5 duong 102',
            lag: 10.782222,
            lng: 106.70278,
        },
        {
            id: 3,
            title: 'con chim non',
            description: 'trên cành cây hót líu lo',
            priority: 1,
            user_name: 'nhontq',
            city: 'TP Ho Chi Minh',
            district: 'Quan 10',
            street: 'Cach Mang T8',
            ward: 'Man Thien',
            address: 'so 5 duong 102',
            lag: 10.782222,
            lng: 106.70278,
        },
        {
            id: 4,
            title: 'con chim non',
            description: 'trên cành cây hót líu lo',
            priority: 1,
            user_name: 'nhontq',
            city: 'TP Ho Chi Minh',
            district: 'Quan 10',
            street: 'Cach Mang T8',
            ward: 'Man Thien',
            address: 'so 5 duong 102',
            lag: 10.782222,
            lng: 106.70278,
        },
        {
            id: 5,
            title: 'con chim non',
            description: 'trên cành cây hót líu lo',
            priority: 1,
            user_name: 'nhontq',
            city: 'TP Ho Chi Minh',
            district: 'Quan 10',
            street: 'Cach Mang T8',
            ward: 'Man Thien',
            address: 'so 5 duong 102',
            lag: 10.782222,
            lng: 106.70278,
        },
        {
            id: 6,
            title: 'con chim non',
            description: 'trên cành cây hót líu lo',
            priority: 1,
            user_name: 'nhontq',
            city: 'TP Ho Chi Minh',
            district: 'Quan 10',
            street: 'Cach Mang T8',
            ward: 'Man Thien',
            address: 'so 5 duong 102',
            lag: 10.782222,
            lng: 106.70278,
        },
        {
            id: 7,
            title: 'con chim non',
            description: 'trên cành cây hót líu lo',
            priority: 1,
            user_name: 'nhontq',
            city: 'TP Ho Chi Minh',
            district: 'Quan 10',
            street: 'Cach Mang T8',
            ward: 'Man Thien',
            address: 'so 5 duong 102',
            lag: 10.782222,
            lng: 106.70278,
        },
    ],
    isFetching: false,
    error: false,
};
