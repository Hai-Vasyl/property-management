import { ApartmentRepository } from '../../repositories/apartment.repository';
import { mockValue } from '../../../common/helpers/mock-value';
import {
  deleteResult,
  updateResult,
} from '../../../common/__mocks__/base.mock';
import { apartmentEntity } from '../entities/apartment-entity.mock';

export const ApartmentRepositoryMock = {
  provide: ApartmentRepository,
  useValue: {
    create: mockValue(apartmentEntity),
    findMany: mockValue([apartmentEntity]),
    findById: mockValue(apartmentEntity),
    updateById: mockValue(updateResult),
    deleteById: mockValue(deleteResult),
  },
};
