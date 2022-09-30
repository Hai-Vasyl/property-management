import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResidentService } from './resident.service';
import { ResidentController } from './resident.controller';
import { ResidentEntity } from './entities/resident.entity';
import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResidentEntity, ApartmentEntity])],
  controllers: [ResidentController],
  providers: [ResidentService],
})
export class ResidentModule {}
