import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { HouseEntity } from 'src/house/entities/house.entity';
import { FindEntityDto } from 'src/common/dto/find-entity.dto';
import { CreateApartmentDto } from './dto/create-appartment.dto';
import { UpdateApartmentDto } from './dto/update-appartment.dto';
import { ApartmentEntity } from './entities/apartment.entity';

@Injectable()
export class ApartmentService {
  public constructor(
    @InjectRepository(ApartmentEntity)
    private apartmentRepository: Repository<ApartmentEntity>,
    @InjectRepository(HouseEntity)
    private houseRepository: Repository<HouseEntity>,
  ) {}

  private async findHouseOrFail(id: number): Promise<HouseEntity> {
    const house = await this.houseRepository.findOne({
      where: { id },
    });

    if (!house) {
      throw new UnprocessableEntityException({
        message: 'The house with the specified Id was not found',
      });
    }

    return house;
  }

  public async create(
    houseId: number,
    createApartmentDto: CreateApartmentDto,
  ): Promise<ApartmentEntity> {
    createApartmentDto.house = await this.findHouseOrFail(houseId);

    return this.apartmentRepository.create(createApartmentDto).save();
  }

  public async find({
    limit = 20,
    skip = 0,
  }: FindEntityDto): Promise<ApartmentEntity[]> {
    return this.apartmentRepository
      .createQueryBuilder('apartment')
      .leftJoinAndSelect('apartment.house', 'house')
      .take(limit)
      .skip(skip)
      .getMany();
  }

  public async findOne(id: number): Promise<ApartmentEntity> {
    return this.apartmentRepository.findOne({ where: { id } });
  }

  public async update(
    id: number,
    updateApartmentDto: UpdateApartmentDto,
  ): Promise<UpdateResult> {
    return this.apartmentRepository.update(id, updateApartmentDto);
  }

  public async remove(id: number): Promise<DeleteResult> {
    return this.apartmentRepository.delete(id);
  }
}
