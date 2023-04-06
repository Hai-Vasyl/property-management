import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam } from '@nestjs/swagger';

import { UpdateApartmentDto } from '../dto/update-apartment.dto';

export function ApiUpdateApartment() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Updating apartment' }),
    ApiBody({ type: UpdateApartmentDto }),
    ApiParam({
      type: Number,
      name: 'id',
    }),
  );
}
