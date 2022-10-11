import { MaxLength, IsNotEmpty } from 'class-validator';

export class CreateHouseDto {
  @MaxLength(150, {
    message: 'The "title" field must contain no more than 150 characters',
  })
  @IsNotEmpty({
    message: 'The "title" field cannot be empty',
  })
  title: string;

  @MaxLength(150, {
    message: 'The "address" field must contain no more than 150 characters',
  })
  @IsNotEmpty({
    message: 'The "address" field cannot be empty',
  })
  address: string;
}
