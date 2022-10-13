import { faker } from '@faker-js/faker';

import { HouseEntity } from '../../entities/house.entity';

const { number, string } = faker.datatype;

export const houseEntity = {
  id: number(),
  title: string(),
  address: string(),
} as HouseEntity;
