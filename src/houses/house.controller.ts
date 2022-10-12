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

import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { HouseEntity } from './entities/house.entity';
import { FindEntityDto } from '../common/dto/find-entity.dto';
import { FindEntityByStringDto } from '../common/dto/find-entity-by-string.dto';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  // @UseInterceptors(new BodyValidationInterceptor(CreateHouseDto))
  create(@Body() createHouseDto: CreateHouseDto): Promise<HouseEntity> {
    return this.houseService.create(createHouseDto);
  }

  @Get()
  // @UseInterceptors(new QueryValidationInterceptor(FindEntityDto))
  find(@Query() findEntityDto: FindEntityDto): Promise<HouseEntity[]> {
    return this.houseService.find(findEntityDto);
  }

  @Get('search')
  // @UseInterceptors(new QueryValidationInterceptor(FindEntityByStringDto))
  findByString(
    @Query() findEntityByStringDto: FindEntityByStringDto,
  ): Promise<HouseEntity[]> {
    return this.houseService.findByString(findEntityByStringDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<HouseEntity> {
    return this.houseService.findOne(id);
  }

  @Patch(':id')
  // @UseInterceptors(new BodyValidationInterceptor(UpdateHouseDto))
  update(
    @Param('id') id: number,
    @Body() updateHouseDto: UpdateHouseDto,
  ): Promise<UpdateResult> {
    return this.houseService.update(id, updateHouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.houseService.remove(id);
  }
}
