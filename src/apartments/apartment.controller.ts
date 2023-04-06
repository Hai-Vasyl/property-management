import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';

import { FindEntityDto } from '../common/dto/find-entity.dto';
import { ApartmentService } from './apartment.service';
import { ApiCreateApartment } from './decorators/api-create-apartment.decorator';
import { ApiFindApartments } from './decorators/api-find-apartments.decorator';
import { ApiFindOneApartment } from './decorators/api-find-one-apartment.decorator';
import { ApiRemoveApartment } from './decorators/api-remove-apartment.decorator';
import { ApiUpdateApartment } from './decorators/api-update-apartment.decorator';
import { CreateApartmentParamsDto } from './dto/create-apartment-params.dto';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { ApartmentEntity } from './entities/apartment.entity';

@ApiTags('Apartments')
@Controller('apartment')
export class ApartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @ApiCreateApartment()
  @Post(':houseId')
  create(
    @Param() { houseId }: CreateApartmentParamsDto,
    @Body() createApartmentDto: CreateApartmentDto,
  ): Promise<ApartmentEntity> {
    return this.apartmentService.create(houseId, createApartmentDto);
  }

  @ApiFindApartments()
  @Get()
  find(@Query() findEntityDto: FindEntityDto): Promise<ApartmentEntity[]> {
    return this.apartmentService.find(findEntityDto);
  }

  @ApiFindOneApartment()
  @Get(':id')
  findOne(@Param('id') id: number): Promise<ApartmentEntity> {
    return this.apartmentService.findOne(id);
  }

  @ApiUpdateApartment()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateApartmentDto: UpdateApartmentDto,
  ): Promise<UpdateResult> {
    return this.apartmentService.update(id, updateApartmentDto);
  }

  @ApiRemoveApartment()
  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.apartmentService.remove(id);
  }
}
