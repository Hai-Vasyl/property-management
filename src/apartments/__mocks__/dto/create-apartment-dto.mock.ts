import { faker } from '@faker-js/faker';

import { houseEntity } from '../../../houses/__mocks__/entities/house.entity.mock';
import { CreateApartmentDto } from '../../dto/create-apartment.dto';

const { number } = faker.datatype;

export const createApartmentDto: CreateApartmentDto = {
  number: number(),
  floor: number(),
  house: houseEntity,
};
