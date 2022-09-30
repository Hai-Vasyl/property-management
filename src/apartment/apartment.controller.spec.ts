import { Test, TestingModule } from '@nestjs/testing';
import { AppartmentController } from './apartment.controller';
import { ApartmentService } from './apartment.service';

describe('AppartmentController', () => {
  let controller: AppartmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppartmentController],
      providers: [ApartmentService],
    }).compile();

    controller = module.get<AppartmentController>(AppartmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
