import { FactoryProvider, Inject } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import { Config, ConfigProviderKey } from '../config/config.provider';

export type DB = NodePgDatabase<typeof schema>;

export const DrizzleProvider = Symbol();

export const InjectDB = () => Inject(DrizzleProvider);

export const drizzleProvider: FactoryProvider<DB> = {
  provide: DrizzleProvider,
  inject: [ConfigProviderKey],
  useFactory: (config: Config) =>
    drizzle({
      connection: {
        host: config.database.host,
        port: config.database.port,
        database: config.database.name,
        user: config.database.user,
        password: config.database.password,
        ssl: false,
      },
    }),
};
