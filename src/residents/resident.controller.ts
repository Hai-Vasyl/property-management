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

import { FindEntityByStringDto } from '../common/dto/find-entity-by-string.dto';
import { FindEntityDto } from '../common/dto/find-entity.dto';
import { ApiCreateResident } from './decorators/api-create-resident.decorator';
import { ApiFindByStringResidents } from './decorators/api-find-by-string-residents.decorator';
import { ApiFindOneResident } from './decorators/api-find-one-resident.decorator';
import { ApiFindResidents } from './decorators/api-find-residents.decorator';
import { ApiRemoveResident } from './decorators/api-remove-resident.decorator';
import { ApiUpdateResident } from './decorators/api-update-resident.decorator';
import { CreateResidentParamsDto } from './dto/create-resident-params.dto';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { ResidentEntity } from './entities/resident.entity';
import { ResidentService } from './resident.service';

@ApiTags('Residents')
@Controller('resident')
export class ResidentController {
  constructor(private readonly residentService: ResidentService) {}

  @ApiCreateResident()
  @Post(':apartmentId')
  create(
    @Param() { apartmentId }: CreateResidentParamsDto,
    @Body() createResidentDto: CreateResidentDto,
  ): Promise<ResidentEntity> {
    return this.residentService.create(apartmentId, createResidentDto);
  }

  @ApiFindResidents()
  @Get()
  find(@Query() findEntityDto: FindEntityDto): Promise<ResidentEntity[]> {
    return this.residentService.find(findEntityDto);
  }

  @ApiFindByStringResidents()
  @Get('search')
  findByString(
    @Query() findEntityByStringDto: FindEntityByStringDto,
  ): Promise<ResidentEntity[]> {
    return this.residentService.findByString(findEntityByStringDto);
  }

  @ApiFindOneResident()
  @Get(':id')
  findOne(@Param('id') id: number): Promise<ResidentEntity> {
    return this.residentService.findOne(id);
  }

  @ApiUpdateResident()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateResidentDto: UpdateResidentDto,
  ): Promise<UpdateResult> {
    return this.residentService.update(id, updateResidentDto);
  }

  @ApiRemoveResident()
  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.residentService.remove(id);
  }
}
