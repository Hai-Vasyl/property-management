import { faker } from '@faker-js/faker';

import { CreateResidentParamsDto } from '../../dto/create-resident-params.dto';

const { number } = faker.datatype;

export const createResidentParamsDto: CreateResidentParamsDto = {
  apartmentId: number(),
};
