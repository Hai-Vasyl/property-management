import { HouseRepository } from '../../repositories/house.repository';
import { houseEntity } from '../entities/house.entity.mock';
import { mockValue } from '../../../common/helpers/mock-value';
import {
  deleteResult,
  updateResult,
} from '../../../common/__mocks__/base.mock';

export const HouseRepositoryMock = {
  provide: HouseRepository,
  useValue: {
    create: mockValue(houseEntity),
    findMany: mockValue([houseEntity]),
    findManyByString: mockValue([houseEntity]),
    findById: mockValue(houseEntity),
    updateById: mockValue(updateResult),
    deleteById: mockValue(deleteResult),
  },
};
