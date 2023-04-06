import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam } from '@nestjs/swagger';

import { UpdateResidentDto } from '../dto/update-resident.dto';

export function ApiUpdateResident() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Updating resident' }),
    ApiBody({ type: UpdateResidentDto }),
    ApiParam({
      type: Number,
      name: 'id',
    }),
  );
}
