import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';

import { CreateHouseDto } from '../dto/create-house.dto';

export function ApiCreateHouse() {
  return applyDecorators(
    HttpCode(HttpStatus.CREATED),
    ApiCreatedResponse({ description: 'Creating house' }),
    ApiBody({ type: CreateHouseDto }),
  );
}
