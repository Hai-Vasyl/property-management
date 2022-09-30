import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';

import { ResidentService } from './resident.service';
import { CreateResidentDto } from './dto/create-resident.dto';
import { UpdateResidentDto } from './dto/update-resident.dto';
import { BodyValidationInterceptor } from 'src/common/interceptors/body-validation.interceptor';
import { ResidentEntity } from './entities/resident.entity';
import { FindEntityDto } from 'src/common/dto/find-entity.dto';
import { QueryValidationInterceptor } from 'src/common/interceptors/query-validation.interceptor';
import { FindEntityByStringDto } from 'src/common/dto/find-entity-by-string.dto';

@Controller('resident')
export class ResidentController {
  constructor(private readonly residentService: ResidentService) {}

  @Post(':apartmentId')
  @UseInterceptors(new BodyValidationInterceptor(CreateResidentDto))
  create(
    @Param('apartmentId', new ParseIntPipe()) apartmentId: number,
    @Body() createResidentDto: CreateResidentDto,
  ): Promise<ResidentEntity> {
    return this.residentService.create(apartmentId, createResidentDto);
  }

  @Get()
  @UseInterceptors(new QueryValidationInterceptor(FindEntityDto))
  find(@Query() findEntityDto: FindEntityDto): Promise<ResidentEntity[]> {
    return this.residentService.find(findEntityDto);
  }

  @Get('search')
  @UseInterceptors(new QueryValidationInterceptor(FindEntityByStringDto))
  findByString(
    @Query() findEntityByStringDto: FindEntityByStringDto,
  ): Promise<ResidentEntity[]> {
    return this.residentService.findByString(findEntityByStringDto);
  }

  @Get(':id')
  findOne(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<ResidentEntity> {
    return this.residentService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(new BodyValidationInterceptor(UpdateResidentDto))
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateResidentDto: UpdateResidentDto,
  ): Promise<UpdateResult> {
    return this.residentService.update(id, updateResidentDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: number): Promise<DeleteResult> {
    return this.residentService.remove(id);
  }
}
