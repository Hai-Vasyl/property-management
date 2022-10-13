import { Module } from '@nestjs/common';
import { AppartmentService } from './appartment.service';
import { AppartmentController } from './appartment.controller';

@Module({
  controllers: [AppartmentController],
  providers: [AppartmentService]
})
export class AppartmentModule {}
