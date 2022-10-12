import { mockValue } from '../../../common/helpers/mock-value';
import {
  deleteResult,
  updateResult,
} from '../../../common/__mocks__/base.mock';
import { ResidentRepository } from '../../repositories/resident.repository';
import { residentEntity } from '../entities/resident-entity.mock';

export const ResidentRepositoryMock = {
  provide: ResidentRepository,
  useValue: {
    create: mockValue(residentEntity),
    findMany: mockValue([residentEntity]),
    findManyByString: mockValue([residentEntity]),
    findById: mockValue(residentEntity),
    updateById: mockValue(updateResult),
    deleteById: mockValue(deleteResult),
  },
};
