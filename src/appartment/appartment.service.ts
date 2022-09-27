import { Injectable } from '@nestjs/common';
import { CreateAppartmentDto } from './dto/create-appartment.dto';
import { UpdateAppartmentDto } from './dto/update-appartment.dto';

@Injectable()
export class AppartmentService {
  create(createAppartmentDto: CreateAppartmentDto) {
    return 'This action adds a new appartment';
  }

  findAll() {
    return `This action returns all appartment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appartment`;
  }

  update(id: number, updateAppartmentDto: UpdateAppartmentDto) {
    return `This action updates a #${id} appartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appartment`;
  }
}
