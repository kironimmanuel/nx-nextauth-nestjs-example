import { JWT } from 'next-auth/jwt';
import NextAuth from 'next-auth/next';

declare module 'next-auth' {
    interface Session {
        user: {
            id: number;
            name: string;
            email: string;
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
        };
        backendTokens: {
            accessToken: string;
            refreshToken: string;
            expiresIn: number;
        };
    }
}
