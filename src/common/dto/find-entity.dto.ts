import { IsOptional, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindEntityDto {
  @ApiPropertyOptional({ type: Number, description: 'limit' })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'The "limit" query only accepts numeric values' })
  @Min(6, { message: 'The "limit" query is too small, it must be at least 6' })
  @Max(40, {
    message:
      'The "limit" query is too large, it must be greater than or equal to 40',
  })
  public limit?: number = 20;

  @ApiPropertyOptional({ type: Number, description: 'skip' })
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'The "skip" query only accepts numeric values' })
  @Min(0, { message: 'The "skip" query only accepts values from 0 or more' })
  public skip?: number = 0;
}
