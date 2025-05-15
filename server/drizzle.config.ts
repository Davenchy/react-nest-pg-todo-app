import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: 'src/database/schema.ts',
  out: './migrations',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    password: 'dev',
    user: 'dev',
    database: 'todos_db',
    ssl: false,
  },
});
