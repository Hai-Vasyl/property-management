import { faker } from '@faker-js/faker';

import { ResidentEntity } from '../../entities/resident.entity';
import { GenderEnum } from '../../enums/gender';
import { apartmentEntity } from '../../../apartments/__mocks__/entities/apartment-entity.mock';

const { string, number } = faker.datatype;

export const residentEntity = {
  id: number(),
  firstName: string(),
  lastName: string(),
  gender: GenderEnum.MALE,
  apartment: apartmentEntity,
} as ResidentEntity;
