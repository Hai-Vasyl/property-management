import { Test, TestingModule } from '@nestjs/testing';
import { faker } from '@faker-js/faker';
import { DeleteResult, UpdateResult } from 'typeorm';

import { HouseRepository } from '../houses/repositories/house.repository';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';
import { HouseEntity } from './entities/house.entity';

import { deleteResult, updateResult } from '../common/__mocks__/base.mock';
import { houseEntity } from '../houses/__mocks__/entities/house.entity.mock';
import { findEntityDto } from '../common/__mocks__/dto/find-entity-dto.mock';
import { HouseRepositoryMock } from './__mocks__/repositories/house-repository.mock';
import { createHouseDto } from './__mocks__/dto/create-house-dto.mock';
import { findEntityByStringDto } from '../common/__mocks__/dto/find-entity-by-string-dto.mock';
import { updateHouseDto } from './__mocks__/dto/update-house-dto.mock';

const { number } = faker.datatype;

describe('HouseController', () => {
  const houseId = number();

  let houseController: HouseController;
  let houseService: HouseService;
  let houseRepository: HouseRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HouseController],
      providers: [HouseService, HouseRepositoryMock],
    }).compile();

    houseController = module.get<HouseController>(HouseController);
    houseService = module.get<HouseService>(HouseService);
    houseRepository = module.get<HouseRepository>(HouseRepository);
  });

  afterEach(() => jest.clearAllMocks());

  describe('create', () => {
    let response: HouseEntity;

    beforeEach(async () => {
      response = await houseController.create(createHouseDto);
    });

    it('should call houseRepository.create method', async () => {
      expect(houseRepository.create).toBeCalledWith(createHouseDto);
    });

    it('should return expected result', async () => {
      expect(response).toEqual(houseEntity);
    });
  });

  describe('find', () => {
    let response: HouseEntity[];

    beforeEach(async () => {
      response = await houseController.find(findEntityDto);
    });

    it('should call houseRepository.findMany method', async () => {
      expect(houseRepository.findMany).toBeCalledWith(findEntityDto);
    });

    it('should return expected result', async () => {
      expect(response).toEqual([houseEntity]);
    });
  });

  describe('findByString', () => {
    let response: HouseEntity[];

    beforeEach(async () => {
      response = await houseController.findByString(findEntityByStringDto);
    });

    it('should call houseRepository.findManyByString method', async () => {
      expect(houseRepository.findManyByString).toBeCalledWith(
        findEntityByStringDto,
      );
    });

    it('should return expected result', async () => {
      expect(response).toEqual([houseEntity]);
    });
  });

  describe('findOne', () => {
    let response: HouseEntity;

    beforeEach(async () => {
      response = await houseController.findOne(houseId);
    });

    it('should call houseRepository.findById method', async () => {
      expect(houseRepository.findById).toBeCalledWith(houseId);
    });

    it('should return expected result', async () => {
      expect(response).toEqual(houseEntity);
    });
  });

  describe('update', () => {
    let response: UpdateResult;

    beforeEach(async () => {
      response = await houseController.update(houseId, updateHouseDto);
    });

    it('should call houseRepository.updateById method', async () => {
      expect(houseRepository.updateById).toBeCalledWith(
        houseId,
        updateHouseDto,
      );
    });

    it('should return expected result', async () => {
      expect(response).toEqual(updateResult);
    });
  });

  describe('remove', () => {
    let response: DeleteResult;

    beforeEach(async () => {
      response = await houseController.remove(houseId);
    });

    it('should call houseRepository.deleteById method', async () => {
      expect(houseRepository.deleteById).toBeCalledWith(houseId);
    });

    it('should return expected result', async () => {
      expect(response).toEqual(deleteResult);
    });
  });
});
