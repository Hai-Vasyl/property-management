import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

import { ApartmentRepository } from '../apartments/repositories/apartment.repository';
import { FindEntityByStringDto } from '../common/dto/find-entity-by-string.dto';
import { FindEntityDto } from '../common/dto/find-entity.dto';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { ResidentEntity } from './entities/resident.entity';
import { ResidentRepository } from './repositories/resident.repository';

@Injectable()
export class ResidentService {
  public constructor(
    private readonly residentRepository: ResidentRepository,
    private readonly apartmentRepository: ApartmentRepository,
  ) {}

  public async create(
    apartmentId: number,
    createResidentDto: CreateResidentDto,
  ): Promise<ResidentEntity> {
    createResidentDto.apartment = await this.apartmentRepository.findById(
      apartmentId,
    );

    return this.residentRepository.create(createResidentDto);
  }

  public async find(findEntityDto: FindEntityDto): Promise<ResidentEntity[]> {
    return this.residentRepository.findMany(findEntityDto);
  }

  public async findByString(
    findEntityByStringDto: FindEntityByStringDto,
  ): Promise<ResidentEntity[]> {
    return this.residentRepository.findManyByString(findEntityByStringDto);
  }

  public async findOne(id: number): Promise<ResidentEntity> {
    return this.residentRepository.findById(id);
  }

  public async update(
    id: number,
    updateResidentDto: UpdateResidentDto,
  ): Promise<UpdateResult> {
    return this.residentRepository.updateById(id, updateResidentDto);
  }

  public async remove(id: number): Promise<DeleteResult> {
    return this.residentRepository.deleteById(id);
  }
}
