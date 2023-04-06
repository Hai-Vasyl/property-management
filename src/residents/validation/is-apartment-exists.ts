import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { ApartmentRepository } from '../../apartments/repositories/apartment.repository';

@Injectable()
@ValidatorConstraint({ name: 'isApartmentExists', async: true })
export class IsApartmentExists implements ValidatorConstraintInterface {
  public constructor(
    private readonly apartmentRepository: ApartmentRepository,
  ) {}

  public async validate(value: number): Promise<boolean> {
    const apartment = await this.apartmentRepository.findById(value);

    return Boolean(apartment);
  }

  public defaultMessage(validationArguments?: ValidationArguments): string {
    return `The apartment with the Id ${validationArguments.value} was not found`;
  }
}
