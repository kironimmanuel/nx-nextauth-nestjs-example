declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    JWT_SECRET_KEY: string;
    JWT_REFRESH_TOKEN_KEY: string;

    FRONTEND_DEV_URL: string;
    FRONTEND_PROD_URL: string;
  }
}
