import { Module } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseController } from './house.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseEntity } from './entities/house.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HouseEntity])],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
