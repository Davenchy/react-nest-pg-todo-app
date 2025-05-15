import { Module } from '@nestjs/common';
import { drizzleProvider, DrizzleProvider } from './database.provider';

@Module({
  providers: [drizzleProvider],
  exports: [DrizzleProvider],
})
export class DatabaseModule {}
