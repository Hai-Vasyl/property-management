import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam } from '@nestjs/swagger';

import { UpdateHouseDto } from '../dto/update-house.dto';

export function ApiUpdateHouse() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Updating house' }),
    ApiBody({ type: UpdateHouseDto }),
    ApiParam({
      type: Number,
      name: 'id',
    }),
  );
}
