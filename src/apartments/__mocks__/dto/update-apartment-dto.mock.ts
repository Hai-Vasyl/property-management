import { UpdateApartmentDto } from '../../dto/update-apartment.dto';
import { createApartmentDto } from './create-apartment-dto.mock';

export const updateApartmentDto: UpdateApartmentDto = { ...createApartmentDto };
