import { Role } from '@/constants/role';

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
}
