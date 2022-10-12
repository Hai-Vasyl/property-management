import { faker } from '@faker-js/faker';

import { FindEntityByStringDto } from '../../dto/find-entity-by-string.dto';

const { number, string } = faker.datatype;

export const findEntityByStringDto: FindEntityByStringDto = {
  limit: number(),
  skip: number(),
  query: string(),
};
