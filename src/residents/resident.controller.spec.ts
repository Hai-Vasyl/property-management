import { Test, TestingModule } from '@nestjs/testing';
import { faker } from '@faker-js/faker';
import { DeleteResult, UpdateResult } from 'typeorm';

import { ResidentController } from './resident.controller';
import { ResidentService } from './resident.service';
import { ResidentRepository } from './repositories/resident.repository';
import { ApartmentRepository } from '../apartments/repositories/apartment.repository';
import { ResidentEntity } from './entities/resident.entity';

import { deleteResult, updateResult } from '../common/__mocks__/base.mock';
import { findEntityDto } from '../common/__mocks__/dto/find-entity-dto.mock';
import { ApartmentRepositoryMock } from '../apartments/__mocks__/repositories/apartment-repository.mock';
import { ResidentRepositoryMock } from './__mocks__/repositories/resident-repository.mock';
import { createResidentParamsDto } from './__mocks__/dto/create-resident-params-dto.mock';
import { createResidentDto } from './__mocks__/dto/create-resident-dto.mock';
import { residentEntity } from './__mocks__/entities/resident-entity.mock';
import { updateResidentDto } from './__mocks__/dto/update-resident-dto.mock';

const { number } = faker.datatype;

describe('ResidentController', () => {
  const residentId = number();

  let residentController: ResidentController;
  let residentService: ResidentService;
  let residentRepository: ResidentRepository;
  let apartmentRepository: ApartmentRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResidentController],
      providers: [
        ResidentService,
        ApartmentRepositoryMock,
        ResidentRepositoryMock,
      ],
    }).compile();

    residentController = module.get<ResidentController>(ResidentController);
    residentService = module.get<ResidentService>(ResidentService);
    residentRepository = module.get<ResidentRepository>(ResidentRepository);
    apartmentRepository = module.get<ApartmentRepository>(ApartmentRepository);
  });

  afterEach(() => jest.clearAllMocks());

  describe('create', () => {
    let response: ResidentEntity;

    beforeEach(async () => {
      response = await residentController.create(
        createResidentParamsDto,
        createResidentDto,
      );
    });

    it('should call apartmentRepository.findById method', async () => {
      expect(apartmentRepository.findById).toBeCalledWith(
        createResidentParamsDto.apartmentId,
      );
    });

    it('should call residentRepository.create method', async () => {
      expect(residentRepository.create).toBeCalledWith(createResidentDto);
    });

    it('should return expected result', async () => {
      expect(response).toEqual(residentEntity);
    });
  });

  describe('find', () => {
    let response: ResidentEntity[];

    beforeEach(async () => {
      response = await residentController.find(findEntityDto);
    });

    it('should call residentRepository.findMany method', async () => {
      expect(residentRepository.findMany).toBeCalledWith(findEntityDto);
    });

    it('should return expected result', async () => {
      expect(response).toEqual([residentEntity]);
    });
  });

  describe('findOne', () => {
    let response: ResidentEntity;

    beforeEach(async () => {
      response = await residentController.findOne(residentId);
    });

    it('should call residentRepository.findById method', async () => {
      expect(residentRepository.findById).toBeCalledWith(residentId);
    });

    it('should return expected result', async () => {
      expect(response).toEqual(residentEntity);
    });
  });

  describe('update', () => {
    let response: UpdateResult;

    beforeEach(async () => {
      response = await residentController.update(residentId, updateResidentDto);
    });

    it('should call residentRepository.updateById method', async () => {
      expect(residentRepository.updateById).toBeCalledWith(
        residentId,
        updateResidentDto,
      );
    });

    it('should return expected result', async () => {
      expect(response).toEqual(updateResult);
    });
  });

  describe('remove', () => {
    let response: DeleteResult;

    beforeEach(async () => {
      response = await residentController.remove(residentId);
    });

    it('should call residentRepository.deleteById method', async () => {
      expect(residentRepository.deleteById).toBeCalledWith(residentId);
    });

    it('should return expected result', async () => {
      expect(response).toEqual(deleteResult);
    });
  });
});
