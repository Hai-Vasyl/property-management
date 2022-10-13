import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';

import { validateDto } from '../helpers/validate-dto';

@Injectable()
export class BodyValidationInterceptor implements NestInterceptor {
  public constructor(private readonly dtoConstructor: any) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest();

    const dto = plainToInstance(this.dtoConstructor, req.body);
    await validateDto(dto);

    req.body = dto;

    return next.handle().pipe();
  }
}
