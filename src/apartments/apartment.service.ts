import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

import { FindEntityDto } from '../common/dto/find-entity.dto';
import { HouseRepository } from '../houses/repositories/house.repository';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApartmentEntity } from './entities/apartment.entity';
import { ApartmentRepository } from './repositories/apartment.repository';

@Injectable()
export class ApartmentService {
  public constructor(
    private readonly apartmentRepository: ApartmentRepository,
    private readonly houseRepository: HouseRepository,
  ) {}

  public async create(
    houseId: number,
    createApartmentDto: CreateApartmentDto,
  ): Promise<ApartmentEntity> {
    createApartmentDto.house = await this.houseRepository.findById(houseId);

    return this.apartmentRepository.create(createApartmentDto);
  }

  public async find(findEntityDto: FindEntityDto): Promise<ApartmentEntity[]> {
    return this.apartmentRepository.findMany(findEntityDto);
  }

  public async findOne(id: number): Promise<ApartmentEntity> {
    return this.apartmentRepository.findById(id);
  }

  public async update(
    id: number,
    updateApartmentDto: UpdateApartmentDto,
  ): Promise<UpdateResult> {
    return this.apartmentRepository.updateById(id, updateApartmentDto);
  }

  public async remove(id: number): Promise<DeleteResult> {
    return this.apartmentRepository.deleteById(id);
  }
}
