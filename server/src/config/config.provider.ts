import { FactoryProvider, Inject } from '@nestjs/common';
import { config } from 'dotenv';

export interface Config {
  port: number;
  database: {
    host: string;
    port: number;
    name: string;
    user: string;
    password: string;
  };
}

export const ConfigProviderKey = Symbol();
export const InjectConfig = () => Inject(ConfigProviderKey);
export const ConfigProvider: FactoryProvider<Config> = {
  provide: ConfigProviderKey,
  useFactory: () => {
    config();
    return {
      port: parseInt(process.env.PORT, 10) || 3000,
      database: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        name: process.env.DB_NAME || 'todos_db',
        user: process.env.DB_USER || 'dev',
        password: process.env.DB_PASSWORD || 'dev',
      },
    };
  },
};
