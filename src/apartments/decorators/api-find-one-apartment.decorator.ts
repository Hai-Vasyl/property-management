import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

export function ApiFindOneApartment() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Searching for apartment by ID' }),
    ApiParam({
      type: Number,
      name: 'id',
    }),
  );
}
