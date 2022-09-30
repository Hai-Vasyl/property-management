import { PartialType } from '@nestjs/mapped-types';
import { MaxLength, IsOptional } from 'class-validator';

import { FindEntityDto } from './find-entity.dto';

export class FindEntityByStringDto extends PartialType(FindEntityDto) {
  @IsOptional()
  @MaxLength(150, {
    message: 'The "query" query must contain no more than 150 characters',
  })
  query: string;
}
