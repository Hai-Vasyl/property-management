import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, IsNotEmpty, IsEnum, Validate } from 'class-validator';
import { ApartmentEntity } from '../../apartments/entities/apartment.entity';

import { GenderEnum } from '../enums/gender';

export class CreateResidentDto {
  @ApiProperty({ type: String, description: 'firstName' })
  @MaxLength(50, {
    message: 'The "firstName" field must contain no more than 50 characters',
  })
  @IsNotEmpty({
    message: 'The "firstName" field cannot be empty',
  })
  firstName: string;

  @ApiProperty({ type: String, description: 'lastName' })
  @MaxLength(50, {
    message: 'The "lastName" field must contain no more than 50 characters',
  })
  @IsNotEmpty({
    message: 'The "lastName" field cannot be empty',
  })
  lastName: string;

  @ApiProperty({ type: String, description: 'gender' })
  @IsEnum(GenderEnum, {
    message: 'The "gender" field is invalid',
  })
  @IsNotEmpty({
    message: 'The "gender" field cannot be empty',
  })
  gender: GenderEnum;

  apartment: ApartmentEntity;
}
