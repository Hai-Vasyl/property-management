import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseModule } from './house/house.module';
import { AppartmentModule } from './apartment/apartment.module';
import { ResidentModule } from './resident/resident.module';
import { initAppModules } from './init/app-modules';

@Module({
  imports: [...initAppModules, HouseModule, AppartmentModule, ResidentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
