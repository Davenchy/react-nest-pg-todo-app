import { Global, Module } from '@nestjs/common';
import { ConfigProvider, ConfigProviderKey } from './config.provider';

@Global()
@Module({
  providers: [ConfigProvider],
  exports: [ConfigProviderKey],
})
export class ConfigModule {}
