import { PartialType } from '@nestjs/mapped-types';
import { CreateAppartmentDto } from './create-appartment.dto';

export class UpdateAppartmentDto extends PartialType(CreateAppartmentDto) {}
