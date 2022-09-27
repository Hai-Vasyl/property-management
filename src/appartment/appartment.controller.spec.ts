import { Test, TestingModule } from '@nestjs/testing';
import { AppartmentController } from './appartment.controller';
import { AppartmentService } from './appartment.service';

describe('AppartmentController', () => {
  let controller: AppartmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppartmentController],
      providers: [AppartmentService],
    }).compile();

    controller = module.get<AppartmentController>(AppartmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
