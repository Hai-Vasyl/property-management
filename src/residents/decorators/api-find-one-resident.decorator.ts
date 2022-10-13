import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

export function ApiFindOneResident() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Searching for resident by ID' }),
    ApiParam({
      type: Number,
      name: 'id',
    }),
  );
}
