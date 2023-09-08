import { JWT } from 'next-auth/jwt';
import NextAuth from 'next-auth/next';
import { Roles } from '../constants/role';

declare module 'next-auth' {
    interface Session {
        user: {
            id: number;
            name: string;
            email: string;
            role: Roles;
        };
        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        user: {
            id: number;
            name: string;
            email: string;
            role: Roles;
        };
        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }
}
