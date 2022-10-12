import { faker } from '@faker-js/faker';

import { apartmentEntity } from '../../../apartments/__mocks__/entities/apartment-entity.mock';
import { CreateResidentDto } from '../../dto/create-resident.dto';
import { GenderEnum } from '../../enums/gender';

const { string } = faker.datatype;

export const createResidentDto: CreateResidentDto = {
  firstName: string(),
  lastName: string(),
  gender: GenderEnum.FEMALE,
  apartment: apartmentEntity,
};
