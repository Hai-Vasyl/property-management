import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiParam } from '@nestjs/swagger';

import { CreateApartmentDto } from '../dto/create-apartment.dto';

export function ApiCreateApartment() {
  return applyDecorators(
    HttpCode(HttpStatus.CREATED),
    ApiCreatedResponse({ description: 'Creating apartment' }),
    ApiBody({ type: CreateApartmentDto }),
    ApiParam({
      type: Number,
      name: 'houseId',
    }),
  );
}
