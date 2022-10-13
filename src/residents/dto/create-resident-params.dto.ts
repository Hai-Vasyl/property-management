import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, Validate } from 'class-validator';

import { IsApartmentExists } from '../validation/is-apartment-exists';

export class CreateResidentParamsDto {
  @ApiProperty({ type: Number, description: 'apartmentId' })
  @Validate(IsApartmentExists)
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'The "apartmentId" param must be a number type' },
  )
  @Type(() => Number)
  @IsNotEmpty({
    message: 'The "apartmentId" param cannot be empty',
  })
  apartmentId: number;
}