export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface UserDetails {
    data: {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    },
    support: {
        url: string;
        text: string;
    }
}