import {
  HttpException,
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ExceptionServiceInterface,
  FormatExceptionMessageInterface,
} from 'src/shared/domain/adapters/exceptions.interface';

@Injectable()
export class ExceptionService implements ExceptionServiceInterface {
  httException(data?: FormatExceptionMessageInterface): void {
    throw new HttpException(data.message, data.code_error);
  }

  badRequestException(data: FormatExceptionMessageInterface): void {
    throw new BadRequestException(data);
  }

  internalServerErrorException(data?: FormatExceptionMessageInterface): void {
    throw new InternalServerErrorException(data);
  }

  forbiddenException(data?: FormatExceptionMessageInterface): void {
    throw new ForbiddenException(data);
  }

  UnauthorizedException(data?: FormatExceptionMessageInterface): void {
    throw new UnauthorizedException(data);
  }
}
