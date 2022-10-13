import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseModule } from './house/house.module';
import { AppartmentModule } from './appartment/appartment.module';
import { ResidentModule } from './resident/resident.module';

@Module({
  imports: [HouseModule, AppartmentModule, ResidentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
