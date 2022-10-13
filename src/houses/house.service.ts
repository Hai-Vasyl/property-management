import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

import { FindEntityByStringDto } from '../common/dto/find-entity-by-string.dto';
import { FindEntityDto } from '../common/dto/find-entity.dto';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { HouseEntity } from './entities/house.entity';
import { HouseRepository } from './repositories/house.repository';

@Injectable()
export class HouseService {
  public constructor(private readonly houseRepository: HouseRepository) {}

  public async create(createHouseDto: CreateHouseDto): Promise<HouseEntity> {
    return this.houseRepository.create(createHouseDto);
  }

  public async find(findEntityDto: FindEntityDto): Promise<HouseEntity[]> {
    return this.houseRepository.findMany(findEntityDto);
  }

  public async findByString(
    findEntityByStringDto: FindEntityByStringDto,
  ): Promise<HouseEntity[]> {
    return this.houseRepository.findManyByString(findEntityByStringDto);
  }

  public async findOne(id: number): Promise<HouseEntity> {
    return this.houseRepository.findById(id);
  }

  public async update(
    id: number,
    updateHouseDto: UpdateHouseDto,
  ): Promise<UpdateResult> {
    return this.houseRepository.updateById(id, updateHouseDto);
  }

  public async remove(id: number): Promise<DeleteResult> {
    return this.houseRepository.deleteById(id);
  }
}
