import { InjectRepository } from '@nestjs/typeorm';
import {
  DeleteResult,
  Repository,
  SelectQueryBuilder,
  UpdateResult,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ResidentEntity } from '../entities/resident.entity';
import { CreateResidentDto } from '../dto/create-resident.dto';
import { FindEntityDto } from '../../common/dto/find-entity.dto';
import { FindEntityByStringDto } from '../../common/dto/find-entity-by-string.dto';
import { UpdateResidentDto } from '../dto/update-resident.dto';

@Injectable()
export class ResidentRepository {
  public constructor(
    @InjectRepository(ResidentEntity)
    private readonly repository: Repository<ResidentEntity>,
  ) {}

  private createQueryBuilder({
    limit,
    skip,
  }: FindEntityDto): SelectQueryBuilder<ResidentEntity> {
    return this.repository
      .createQueryBuilder('resident')
      .take(limit)
      .skip(skip);
  }

  public create(createResidentDto: CreateResidentDto): Promise<ResidentEntity> {
    return this.repository.create(createResidentDto).save();
  }

  public findMany(findEntityDto: FindEntityDto): Promise<ResidentEntity[]> {
    return this.createQueryBuilder(findEntityDto)
      .leftJoinAndSelect('resident.apartment', 'apartment')
      .getMany();
  }

  public findManyByString({
    query,
    ...findEntityDto
  }: FindEntityByStringDto): Promise<ResidentEntity[]> {
    return this.createQueryBuilder(findEntityDto)
      .where(
        'resident.firstName like :query OR resident.lastName like :query',
        { query: `%${query}%` },
      )
      .getMany();
  }

  public findById(id: number): Promise<ResidentEntity> {
    return this.repository.findOne({ where: { id } });
  }

  public updateById(
    id: number,
    updateResidentDto: UpdateResidentDto,
  ): Promise<UpdateResult> {
    return this.repository.update(id, updateResidentDto);
  }

  public deleteById(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
