import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

import { IsExists } from '../../common/decorators/is-exists';
import { HouseEntity } from '../../houses/entities/house.entity';

export class CreateApartmentParamsDto {
  @IsExists(HouseEntity, {
    message: 'The house with the specified Id was not found',
  })
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'The "houseId" param must be a number type' },
  )
  @Type(() => Number)
  @IsNotEmpty({
    message: 'The "houseId" param cannot be empty',
  })
  houseId: number;
}
