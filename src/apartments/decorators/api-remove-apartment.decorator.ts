import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

export function ApiRemoveApartment() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Removing apartment' }),
    ApiParam({
      type: Number,
      name: 'id',
    }),
  );
}
