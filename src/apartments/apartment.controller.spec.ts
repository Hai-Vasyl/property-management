import { Test, TestingModule } from '@nestjs/testing';
import { faker } from '@faker-js/faker';
import { DeleteResult, UpdateResult } from 'typeorm';

import { ApartmentController } from './apartment.controller';
import { ApartmentService } from './apartment.service';
import { ApartmentRepository } from './repositories/apartment.repository';
import { HouseRepository } from '../houses/repositories/house.repository';
import { ApartmentEntity } from './entities/apartment.entity';

import { apartmentEntity } from './__mocks__/entities/apartment-entity.mock';
import { deleteResult, updateResult } from '../common/__mocks__/base.mock';
import { createApartmentParamsDto } from './__mocks__/dto/create-apartment-params-dto.mock';
import { createApartmentDto } from './__mocks__/dto/create-apartment-dto.mock';
import { findEntityDto } from '../common/__mocks__/dto/find-entity-dto.mock';
import { updateApartmentDto } from './__mocks__/dto/update-apartment-dto.mock';
import { ApartmentRepositoryMock } from './__mocks__/repositories/apartment-repository.mock';
import { HouseRepositoryMock } from '../houses/__mocks__/repositories/house-repository.mock';

const { number } = faker.datatype;

describe('ApartmentController', () => {
  const apartmentId = number();

  let apartmentController: ApartmentController;
  let apartmentService: ApartmentService;
  let apartmentRepository: ApartmentRepository;
  let houseRepository: HouseRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApartmentController],
      providers: [
        ApartmentService,
        ApartmentRepositoryMock,
        HouseRepositoryMock,
      ],
    }).compile();

    apartmentController = module.get<ApartmentController>(ApartmentController);
    apartmentService = module.get<ApartmentService>(ApartmentService);
    apartmentRepository = module.get<ApartmentRepository>(ApartmentRepository);
    houseRepository = module.get<HouseRepository>(HouseRepository);
  });

  afterEach(() => jest.clearAllMocks());

  describe('create', () => {
    let response: ApartmentEntity;

    beforeEach(async () => {
      response = await apartmentController.create(
        createApartmentParamsDto,
        createApartmentDto,
      );
    });

    it('should call houseRepository.findById method', async () => {
      expect(houseRepository.findById).toBeCalledWith(
        createApartmentParamsDto.houseId,
      );
    });

    it('should call apartmentRepository.create method', async () => {
      expect(apartmentRepository.create).toBeCalledWith(createApartmentDto);
    });

    it('should return expected result', async () => {
      expect(response).toEqual(apartmentEntity);
    });
  });

  describe('find', () => {
    let response: ApartmentEntity[];

    beforeEach(async () => {
      response = await apartmentController.find(findEntityDto);
    });

    it('should call apartmentRepository.findMany method', async () => {
      expect(apartmentRepository.findMany).toBeCalledWith(findEntityDto);
    });

    it('should return expected result', async () => {
      expect(response).toEqual([apartmentEntity]);
    });
  });

  describe('findOne', () => {
    let response: ApartmentEntity;

    beforeEach(async () => {
      response = await apartmentController.findOne(apartmentId);
    });

    it('should call apartmentRepository.findById method', async () => {
      expect(apartmentRepository.findById).toBeCalledWith(apartmentId);
    });

    it('should return expected result', async () => {
      expect(response).toEqual(apartmentEntity);
    });
  });

  describe('update', () => {
    let response: UpdateResult;

    beforeEach(async () => {
      response = await apartmentController.update(
        apartmentId,
        updateApartmentDto,
      );
    });

    it('should call apartmentRepository.updateById method', async () => {
      expect(apartmentRepository.updateById).toBeCalledWith(
        apartmentId,
        updateApartmentDto,
      );
    });

    it('should return expected result', async () => {
      expect(response).toEqual(updateResult);
    });
  });

  describe('remove', () => {
    let response: DeleteResult;

    beforeEach(async () => {
      response = await apartmentController.remove(apartmentId);
    });

    it('should call apartmentRepository.deleteById method', async () => {
      expect(apartmentRepository.deleteById).toBeCalledWith(apartmentId);
    });

    it('should return expected result', async () => {
      expect(response).toEqual(deleteResult);
    });
  });
});
