import { faker } from '@faker-js/faker';

import { CreateApartmentParamsDto } from '../../dto/create-apartment-params.dto';

const { number } = faker.datatype;

export const createApartmentParamsDto: CreateApartmentParamsDto = {
  houseId: number(),
};
