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
import { DeleteResult, UpdateResult } from 'typeorm';

import { FindEntityDto } from 'src/common/dto/find-entity.dto';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-appartment.dto';
import { UpdateApartmentDto } from './dto/update-appartment.dto';
import { ApartmentEntity } from './entities/apartment.entity';

@Controller('apartment')
export class AppartmentController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Post(':houseId')
  // @UseInterceptors(new BodyValidationInterceptor(CreateApartmentDto))
  create(
    @Param('houseId') houseId: number,
    @Body() createApartmentDto: CreateApartmentDto,
  ): Promise<ApartmentEntity> {
    return this.apartmentService.create(houseId, createApartmentDto);
  }

  @Get()
  // @UseInterceptors(new QueryValidationInterceptor(FindEntityDto))
  find(@Query() findEntityDto: FindEntityDto): Promise<ApartmentEntity[]> {
    return this.apartmentService.find(findEntityDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ApartmentEntity> {
    return this.apartmentService.findOne(id);
  }

  @Patch(':id')
  // @UseInterceptors(new BodyValidationInterceptor(UpdateApartmentDto))
  update(
    @Param('id') id: number,
    @Body() updateApartmentDto: UpdateApartmentDto,
  ): Promise<UpdateResult> {
    return this.apartmentService.update(id, updateApartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.apartmentService.remove(id);
  }
}
