import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  DeleteResult,
  Repository,
  SelectQueryBuilder,
  UpdateResult,
} from 'typeorm';
import { FindEntityByStringDto } from '../../common/dto/find-entity-by-string.dto';
import { FindEntityDto } from '../../common/dto/find-entity.dto';

import { CreateHouseDto } from '../dto/create-house.dto';
import { UpdateHouseDto } from '../dto/update-house.dto';
import { HouseEntity } from '../entities/house.entity';

@Injectable()
export class HouseRepository {
  public constructor(
    @InjectRepository(HouseEntity)
    private readonly repository: Repository<HouseEntity>,
  ) {}

  private createQueryBuilder({
    limit,
    skip,
  }: FindEntityDto): SelectQueryBuilder<HouseEntity> {
    return this.repository.createQueryBuilder('house').take(limit).skip(skip);
  }

  public async create(createHouseDto: CreateHouseDto): Promise<HouseEntity> {
    return this.repository.create(createHouseDto).save();
  }

  public async findMany(findEntityDto: FindEntityDto): Promise<HouseEntity[]> {
    return this.createQueryBuilder(findEntityDto).getMany();
  }

  public async findManyByString({
    query,
    ...findEntityDto
  }: FindEntityByStringDto): Promise<HouseEntity[]> {
    return this.createQueryBuilder(findEntityDto)
      .where('house.title like :query OR house.address like :query', {
        query: `%${query}%`,
      })
      .getMany();
  }

  public async findById(id: number): Promise<HouseEntity> {
    return this.repository.findOne({ where: { id } });
  }

  public async updateById(
    id: number,
    updateHouseDto: UpdateHouseDto,
  ): Promise<UpdateResult> {
    return this.repository.update(id, updateHouseDto);
  }

  public async deleteById(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
