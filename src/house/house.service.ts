import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { FindEntityByStringDto } from 'src/common/dto/find-entity-by-string.dto';
import { FindEntityDto } from 'src/common/dto/find-entity.dto';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { HouseEntity } from './entities/house.entity';

@Injectable()
export class HouseService {
  public constructor(
    @InjectRepository(HouseEntity)
    private houseRepository: Repository<HouseEntity>,
  ) {}

  public async create(createHouseDto: CreateHouseDto): Promise<HouseEntity> {
    return this.houseRepository.create(createHouseDto).save();
  }

  public async find({
    limit = 20,
    skip = 0,
  }: FindEntityDto): Promise<HouseEntity[]> {
    return this.houseRepository
      .createQueryBuilder('house')
      .take(limit)
      .skip(skip)
      .getMany();
  }

  public async findByString({
    query,
    limit = 20,
    skip = 0,
  }: FindEntityByStringDto): Promise<HouseEntity[]> {
    return this.houseRepository
      .createQueryBuilder('house')
      .where('house.title like :query OR house.address like :query', {
        query: `%${query}%`,
      })
      .take(limit)
      .skip(skip)
      .getMany();
  }

  public async findOne(id: number): Promise<HouseEntity> {
    return this.houseRepository.findOne({ where: { id } });
  }

  public async update(
    id: number,
    updateHouseDto: UpdateHouseDto,
  ): Promise<UpdateResult> {
    return this.houseRepository.update(id, updateHouseDto);
  }

  public async remove(id: number): Promise<DeleteResult> {
    return this.houseRepository.delete(id);
  }
}
