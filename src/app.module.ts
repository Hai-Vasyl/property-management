import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseModule } from './houses/house.module';
import { AppartmentModule } from './apartments/apartment.module';
import { ResidentModule } from './residents/resident.module';
import { initAppModules } from './init/app-modules';

@Module({
  imports: [...initAppModules, HouseModule, AppartmentModule, ResidentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
