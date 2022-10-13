import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { MaxLength, IsOptional } from 'class-validator';

import { FindEntityDto } from './find-entity.dto';

export class FindEntityByStringDto extends PartialType(FindEntityDto) {
  @ApiPropertyOptional({ type: String, description: 'query' })
  @IsOptional()
  @MaxLength(150, {
    message: 'The "query" query must contain no more than 150 characters',
  })
  query: string;
}
