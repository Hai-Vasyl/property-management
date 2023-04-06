import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { baseConfig } from '../config/base';
import { dbConfig } from '../config/database';

export const initAppModules = [
  ConfigModule.forRoot({
    envFilePath: '.env',
    load: [baseConfig, dbConfig],
    isGlobal: true,
  }),
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) =>
      configService.get('database'),
  }),
];
