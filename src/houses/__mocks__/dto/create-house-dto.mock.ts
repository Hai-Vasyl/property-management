import { faker } from '@faker-js/faker';

import { CreateHouseDto } from '../../dto/create-house.dto';

const { string } = faker.datatype;

export const createHouseDto: CreateHouseDto = {
  title: string(),
  address: string(),
};
