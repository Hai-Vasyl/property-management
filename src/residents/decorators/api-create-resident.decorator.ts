import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiParam } from '@nestjs/swagger';

import { CreateResidentDto } from '../dto/create-resident.dto';

export function ApiCreateResident() {
  return applyDecorators(
    HttpCode(HttpStatus.CREATED),
    ApiCreatedResponse({ description: 'Creating resident' }),
    ApiBody({ type: CreateResidentDto }),
    ApiParam({
      type: Number,
      name: 'apartmentId',
    }),
  );
}
