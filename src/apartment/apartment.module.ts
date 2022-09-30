import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApartmentService } from './apartment.service';
import { AppartmentController } from './apartment.controller';
import { HouseEntity } from 'src/house/entities/house.entity';
import { ApartmentEntity } from './entities/apartment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ApartmentEntity, HouseEntity])],
  controllers: [AppartmentController],
  providers: [ApartmentService],
})
export class AppartmentModule {}
