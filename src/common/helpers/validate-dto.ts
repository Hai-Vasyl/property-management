import { BadRequestException, ValidationError } from '@nestjs/common';
import { validate } from 'class-validator';

export async function validateDto(dto: object) {
  const errors = await validate(dto);

  if (errors?.length) {
    const mapErrors = errors.map((error: ValidationError) => {
      const messageKey = Object.keys(error.constraints)[0];

      return {
        field: error.property,
        message: error.constraints[messageKey],
      };
    });

    throw new BadRequestException(mapErrors);
  }
}
