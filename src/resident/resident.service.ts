import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
import { FindEntityByStringDto } from 'src/common/dto/find-entity-by-string.dto';
import { FindEntityDto } from 'src/common/dto/find-entity.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { ResidentEntity } from './entities/resident.entity';

@Injectable()
export class ResidentService {
  public constructor(
    @InjectRepository(ResidentEntity)
    private residentRepository: Repository<ResidentEntity>,
    @InjectRepository(ApartmentEntity)
    private apartmentRepository: Repository<ApartmentEntity>,
  ) {}

  private async findApartmentOrFail(id: number): Promise<ApartmentEntity> {
    const apartment = await this.apartmentRepository.findOne({
      where: { id },
    });

    if (!apartment) {
      throw new UnprocessableEntityException({
        message: 'The apartment with the specified Id was not found',
      });
    }

    return apartment;
  }

  public async create(
    apartmentId: number,
    createResidentDto: CreateResidentDto,
  ): Promise<ResidentEntity> {
    createResidentDto.apartment = await this.findApartmentOrFail(apartmentId);

    return this.residentRepository.create(createResidentDto).save();
  }

  public async find({
    limit = 20,
    skip = 0,
  }: FindEntityDto): Promise<ResidentEntity[]> {
    return this.residentRepository
      .createQueryBuilder('resident')
      .leftJoinAndSelect('resident.apartment', 'apartment')
      .take(limit)
      .skip(skip)
      .getMany();
  }

  public async findByString({
    query,
    limit = 20,
    skip = 0,
  }: FindEntityByStringDto): Promise<ResidentEntity[]> {
    return this.residentRepository
      .createQueryBuilder('resident')
      .where(
        'resident.firstName like :query OR resident.lastName like :query',
        { query: `%${query}%` },
      )
      .take(limit)
      .skip(skip)
      .getMany();
  }

  public async findOne(id: number): Promise<ResidentEntity> {
    return this.residentRepository.findOne({ where: { id } });
  }

  public async update(
    id: number,
    updateResidentDto: UpdateResidentDto,
  ): Promise<UpdateResult> {
    return this.residentRepository.update(id, updateResidentDto);
  }

  public async remove(id: number): Promise<DeleteResult> {
    return this.residentRepository.delete(id);
  }
}
