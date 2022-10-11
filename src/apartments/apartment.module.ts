import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApartmentService } from './apartment.service';
import { AppartmentController } from './apartment.controller';
import { HouseEntity } from 'src/houses/entities/house.entity';
import { ApartmentEntity } from './entities/apartment.entity';
import { ApartmentRepository } from './repositories/apartment.repository';
import { HouseRepository } from 'src/houses/repositories/house.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ApartmentEntity, HouseEntity])],
  controllers: [AppartmentController],
  providers: [ApartmentService, ApartmentRepository, HouseRepository],
})
export class AppartmentModule {}
