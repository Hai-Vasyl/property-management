import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';

import { FindEntityByStringDto } from '../../common/dto/find-entity-by-string.dto';

export function ApiFindByStringHouses() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Searching for houses by String' }),
    ApiQuery({ type: FindEntityByStringDto }),
  );
}
