import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiParam } from '@nestjs/swagger';

export function ApiRemoveHouse() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Removing house' }),
    ApiParam({
      type: Number,
      name: 'id',
    }),
  );
}
