import axios from 'axios';
import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

async function refreshToken(token: JWT): Promise<JWT> {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
        headers: {
            authorization: `Refresh ${token.backendTokens.refreshToken}`,
        },
    });

    return {
        ...token,
        backendTokens: res.data,
    };
}

// async function refreshToken(token: JWT): Promise<JWT> {
//     const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/refresh', {
//         method: 'POST',
//         headers: {
//             authorization: `Refresh ${token.backendTokens.refreshToken}`,
//         },
//     });
//     console.log('refreshed');

//     const response = await res.json();

//     return {
//         ...token,
//         backendTokens: response,
//     };
// }

export const options: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) return null;

                const { username, password } = credentials;

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });

                if (res.status === 401) {
                    return null;
                }

                const user = await res.json();
                return user;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user };

            if (new Date().getTime() < token.backendTokens.expiresIn) return token;

            return await refreshToken(token);
        },
        async session({ token, session }) {
            session.user = token.user;
            session.backendTokens = token.backendTokens;
            return session;
        },
    },
};
