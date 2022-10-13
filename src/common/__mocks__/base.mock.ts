import { faker } from '@faker-js/faker';
import { DeleteResult, UpdateResult } from 'typeorm';

const { number } = faker.datatype;

const baseResult = {
  affected: number(),
};

export const updateResult = baseResult as UpdateResult;

export const deleteResult = baseResult as DeleteResult;
