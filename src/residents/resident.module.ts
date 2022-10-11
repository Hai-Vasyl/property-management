import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResidentService } from './resident.service';
import { ResidentController } from './resident.controller';
import { ResidentEntity } from './entities/resident.entity';
import { ApartmentEntity } from 'src/apartments/entities/apartment.entity';
import { ApartmentRepository } from 'src/apartments/repositories/apartment.repository';
import { ResidentRepository } from './repositories/resident.repository';
import { IsApartmentExists } from './validation/is-apartment-exists';

@Module({
  imports: [TypeOrmModule.forFeature([ResidentEntity, ApartmentEntity])],
  controllers: [ResidentController],
  providers: [
    ResidentService,
    ResidentRepository,
    ApartmentRepository,
    IsApartmentExists,
  ],
})
export class ResidentModule {}
