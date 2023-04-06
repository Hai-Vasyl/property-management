import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApartmentService } from './apartment.service';
import { ApartmentController } from './apartment.controller';
import { ApartmentEntity } from './entities/apartment.entity';
import { ApartmentRepository } from './repositories/apartment.repository';
import { HouseEntity } from '../houses/entities/house.entity';
import { HouseRepository } from '../houses/repositories/house.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ApartmentEntity, HouseEntity])],
  controllers: [ApartmentController],
  providers: [ApartmentService, ApartmentRepository, HouseRepository],
})
export class AppartmentModule {}
