import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentEntity } from '../apartments/entities/apartment.entity';
import { ApartmentRepository } from '../apartments/repositories/apartment.repository';
import { ResidentEntity } from './entities/resident.entity';
import { ResidentRepository } from './repositories/resident.repository';
import { ResidentController } from './resident.controller';
import { ResidentService } from './resident.service';
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
