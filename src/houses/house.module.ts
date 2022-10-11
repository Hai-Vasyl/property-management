import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { HouseEntity } from './entities/house.entity';
import { HouseRepository } from './repositories/house.repository';

@Module({
  imports: [TypeOrmModule.forFeature([HouseEntity])],
  controllers: [HouseController],
  providers: [HouseService, HouseRepository],
})
export class HouseModule {}
