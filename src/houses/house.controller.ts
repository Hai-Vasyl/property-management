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
import { ApiTags } from '@nestjs/swagger';

import { HouseService } from './house.service';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { HouseEntity } from './entities/house.entity';
import { FindEntityDto } from '../common/dto/find-entity.dto';
import { FindEntityByStringDto } from '../common/dto/find-entity-by-string.dto';
import { ApiRemoveHouse } from './decorators/api-remove-house.decorator';
import { ApiUpdateHouse } from './decorators/api-update-house.decorator';
import { ApiFindOneHouse } from './decorators/api-find-one-house.decorator';
import { ApiFindByStringHouses } from './decorators/api-find-by-string-houses.decorator';
import { ApiFindHouses } from './decorators/api-find-houses.decorator';
import { ApiCreateHouse } from './decorators/api-create-house.decorator';

@ApiTags('Houses')
@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @ApiCreateHouse()
  @Post()
  create(@Body() createHouseDto: CreateHouseDto): Promise<HouseEntity> {
    return this.houseService.create(createHouseDto);
  }

  @ApiFindHouses()
  @Get()
  find(@Query() findEntityDto: FindEntityDto): Promise<HouseEntity[]> {
    return this.houseService.find(findEntityDto);
  }

  @ApiFindByStringHouses()
  @Get('search')
  findByString(
    @Query() findEntityByStringDto: FindEntityByStringDto,
  ): Promise<HouseEntity[]> {
    return this.houseService.findByString(findEntityByStringDto);
  }

  @ApiFindOneHouse()
  @Get(':id')
  findOne(@Param('id') id: number): Promise<HouseEntity> {
    return this.houseService.findOne(id);
  }

  @ApiUpdateHouse()
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateHouseDto: UpdateHouseDto,
  ): Promise<UpdateResult> {
    return this.houseService.update(id, updateHouseDto);
  }

  @ApiRemoveHouse()
  @Delete(':id')
  remove(@Param('id') id: number): Promise<DeleteResult> {
    return this.houseService.remove(id);
  }
}
