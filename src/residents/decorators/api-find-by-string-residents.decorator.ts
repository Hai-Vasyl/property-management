import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';

import { FindEntityByStringDto } from '../../common/dto/find-entity-by-string.dto';

export function ApiFindByStringResidents() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Searching for residents by String' }),
    ApiQuery({ type: FindEntityByStringDto }),
  );
}
