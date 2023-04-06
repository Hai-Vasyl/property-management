import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiQuery } from '@nestjs/swagger';

import { FindEntityDto } from '../../common/dto/find-entity.dto';

export function ApiFindApartments() {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOkResponse({ description: 'Searching for apartments' }),
    ApiQuery({ type: FindEntityDto }),
  );
}
