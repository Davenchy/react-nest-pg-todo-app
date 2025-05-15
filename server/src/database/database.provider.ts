import { FactoryProvider, Inject } from '@nestjs/common';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

export type DB = NodePgDatabase<typeof schema>;

export const DrizzleProvider = Symbol();

export const InjectDB = () => Inject(DrizzleProvider);

export const drizzleProvider: FactoryProvider<DB> = {
  provide: DrizzleProvider,
  useFactory: () =>
    drizzle({
      connection: {
        host: 'localhost',
        port: 5432,
        database: 'todos_db',
        user: 'dev',
        password: 'dev',
        ssl: false,
      },
    }),
};
