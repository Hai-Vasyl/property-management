import { PartialType } from '@nestjs/mapped-types';

import { CreateApartmentDto } from './create-appartment.dto';

export class UpdateApartmentDto extends PartialType(CreateApartmentDto) {}
