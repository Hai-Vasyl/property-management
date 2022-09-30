import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

import { HouseEntity } from 'src/house/entities/house.entity';

export class CreateApartmentDto {
  @Type(() => Number)
  @IsInt({ message: 'The "number" field only accepts numeric values' })
  @Max(150, {
    message:
      'The "number" field is too large, it must be greater than or equal to 150',
  })
  @Min(0, { message: 'The "number" field cannot be negative value' })
  @IsNotEmpty({
    message: 'The "number" field cannot be empty',
  })
  number: number;

  @Type(() => Number)
  @IsInt({ message: 'The "floor" field only accepts numeric values' })
  @Max(100, {
    message:
      'The "floor" field is too large, it must be greater than or equal to 100',
  })
  @Min(0, { message: 'The "floor" field cannot be negative value' })
  @IsNotEmpty({
    message: 'The "floor" field cannot be empty',
  })
  floor: number;

  house: HouseEntity;
}
