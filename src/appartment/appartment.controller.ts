import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppartmentService } from './appartment.service';
import { CreateAppartmentDto } from './dto/create-appartment.dto';
import { UpdateAppartmentDto } from './dto/update-appartment.dto';

@Controller('appartment')
export class AppartmentController {
  constructor(private readonly appartmentService: AppartmentService) {}

  @Post()
  create(@Body() createAppartmentDto: CreateAppartmentDto) {
    return this.appartmentService.create(createAppartmentDto);
  }

  @Get()
  findAll() {
    return this.appartmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appartmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppartmentDto: UpdateAppartmentDto) {
    return this.appartmentService.update(+id, updateAppartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appartmentService.remove(+id);
  }
}
