namespace NodeJS {
    export interface ProcessEnv {
        NEXT_PUBLIC_API_URL: string;
        NEXTAUTH_SECRET: string;
        NODE_ENV: 'development' | 'production';
    }
}
