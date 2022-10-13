import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';

import { FindEntityDto } from '../../common/dto/find-entity.dto';

export function ApiFindHouses() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Searching for houses' }),
    ApiQuery({ type: FindEntityDto }),
  );
}
