import { faker } from '@faker-js/faker';

import { houseEntity } from '../../../houses/__mocks__/entities/house.entity.mock';
import { ApartmentEntity } from '../../entities/apartment.entity';

const { number } = faker.datatype;

export const apartmentEntity = {
  id: number(),
  number: number(),
  floor: number(),
  house: houseEntity,
} as ApartmentEntity;
