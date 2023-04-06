import { faker } from '@faker-js/faker';

import { FindEntityDto } from '../../dto/find-entity.dto';

const { number } = faker.datatype;

export const findEntityDto: FindEntityDto = {
  limit: number(),
  skip: number(),
};
