import { registerAs } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import { ApartmentEntity } from 'src/apartments/entities/apartment.entity';
import { HouseEntity } from 'src/houses/entities/house.entity';
import { ResidentEntity } from 'src/residents/entities/resident.entity';

export const dbConfig = registerAs(
  'database',
  (): PostgresConnectionOptions => {
    const {
      DB_HOST,
      DB_PORT,
      DB_USERNAME,
      DB_PASSWORD,
      DB_DATABASE,
      DB_SYNCHRONIZE,
    } = process.env;

    return {
      type: 'postgres',
      host: DB_HOST,
      port: +DB_PORT,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      synchronize: Boolean(DB_SYNCHRONIZE),
      entities: [ApartmentEntity, HouseEntity, ResidentEntity],
    };
  },
);
