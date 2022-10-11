import { MaxLength, IsNotEmpty, IsEnum, Validate } from 'class-validator';
import { ApartmentEntity } from 'src/apartments/entities/apartment.entity';

import { GenderEnum } from '../enums/gender';

export class CreateResidentDto {
  @MaxLength(50, {
    message: 'The "firstName" field must contain no more than 50 characters',
  })
  @IsNotEmpty({
    message: 'The "firstName" field cannot be empty',
  })
  firstName: string;

  @MaxLength(50, {
    message: 'The "lastName" field must contain no more than 50 characters',
  })
  @IsNotEmpty({
    message: 'The "lastName" field cannot be empty',
  })
  lastName: string;

  @IsEnum(GenderEnum, {
    message: 'The "gender" field is invalid',
  })
  @IsNotEmpty({
    message: 'The "gender" field cannot be empty',
  })
  gender: GenderEnum;

  apartment: ApartmentEntity;
}
