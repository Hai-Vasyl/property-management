import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

export function ApiRemoveResident() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Removing resident' }),
    ApiParam({
      type: Number,
      name: 'id',
    }),
  );
}
