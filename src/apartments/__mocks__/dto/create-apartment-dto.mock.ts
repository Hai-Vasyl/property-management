import { faker } from '@faker-js/faker';

import { houseEntity } from '../../../houses/__mocks__/entities/house.entity.mock';
import { CreateApartmentDto } from '../../dto/create-apartment.dto';

const { number } = faker.datatype;

export const createApartmentDto = {
  number: number(),
  floor: number(),
  house: houseEntity,
} as CreateApartmentDto;
