import "dotenv/config";

export const EnvConfig: {
  apiOrigins: string[];
  apiPort: number;
  auth: {
    passwordSalt: string;
    jwtSecret: string;
    otpSecret: string;
    accountsApiSecret: string;
  };
  redis: {
    host: string;
    port: number;
  };
  database: {
    username: string;
    password: string;
    host: string;
    port: number;
    name: string;
  };
  clientUrl: string;
  apiUrl: string;
} = {
  apiOrigins: process.env.API_ORIGINS.split(","),
  apiPort: +process.env.API_PORT,
  auth: {
    passwordSalt: process.env.API_PASSWORD_SALT,
    jwtSecret: process.env.API_PASSWORD_SALT,
    otpSecret: process.env.API_GENERATION_SECRET,
    accountsApiSecret: process.env.SECRET_KEY_TO_ACCESS_ACCOUNTS_ROUTE,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: +process.env.REDIS_PORT,
  },
  database: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    name: process.env.DB_NAME,
  },
  clientUrl: process.env.CLIENT_DOMAIN,
  apiUrl: process.env.API_DOMAIN,
};
