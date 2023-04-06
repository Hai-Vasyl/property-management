import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, IsNotEmpty } from 'class-validator';

export class CreateHouseDto {
  @ApiProperty({ type: String, description: 'title' })
  @MaxLength(150, {
    message: 'The "title" field must contain no more than 150 characters',
  })
  @IsNotEmpty({
    message: 'The "title" field cannot be empty',
  })
  title: string;

  @ApiProperty({ type: String, description: 'address' })
  @MaxLength(150, {
    message: 'The "address" field must contain no more than 150 characters',
  })
  @IsNotEmpty({
    message: 'The "address" field cannot be empty',
  })
  address: string;
}
