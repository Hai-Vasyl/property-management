import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import {
  DeleteResult,
  Repository,
  SelectQueryBuilder,
  UpdateResult,
} from 'typeorm';

import { FindEntityDto } from 'src/common/dto/find-entity.dto';
import { CreateApartmentDto } from '../dto/create-appartment.dto';
import { UpdateApartmentDto } from '../dto/update-appartment.dto';
import { ApartmentEntity } from '../entities/apartment.entity';

@Injectable()
export class ApartmentRepository {
  public constructor(
    @InjectRepository(ApartmentEntity)
    private readonly repository: Repository<ApartmentEntity>,
  ) {}

  private createQueryBuilder({
    limit,
    skip,
  }: FindEntityDto): SelectQueryBuilder<ApartmentEntity> {
    return this.repository
      .createQueryBuilder('apartment')
      .take(limit)
      .skip(skip);
  }

  // public async findByIdOrFail(id: number): Promise<ApartmentEntity> {
  //   const apartment = await this.repository.findOne({
  //     where: { id },
  //   });

  //   if (!apartment) {
  //     throw new UnprocessableEntityException({
  //       message: 'The apartment with the specified Id was not found',
  //     });
  //   }

  //   return apartment;
  // }

  public async create(
    createApartmentDto: CreateApartmentDto,
  ): Promise<ApartmentEntity> {
    return this.repository.create(createApartmentDto).save();
  }

  public async findMany(
    findEntityDto: FindEntityDto,
  ): Promise<ApartmentEntity[]> {
    return this.createQueryBuilder(findEntityDto)
      .leftJoinAndSelect('apartment.house', 'house')
      .getMany();
  }

  public async findById(id: number): Promise<ApartmentEntity> {
    return this.repository.findOne({ where: { id } });
  }

  public async updateById(
    id: number,
    updateApartmentDto: UpdateApartmentDto,
  ): Promise<UpdateResult> {
    return this.repository.update(id, updateApartmentDto);
  }

  public async deleteById(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
