import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddProfessionalUseCase } from './application/add-professional.use-case';
import { DeleteRequestUseCase } from './application/delete-request.use-case';
import { GetListRequestUseCase } from './application/get-list-request.use-case';
import { GetRequestUseCase } from './application/get-request.use-case';
import { RequestRepository } from './infrastructure/requests.repository';
import { RequestRepositoryInterface } from './domain/request.repository.interface';
import { RequestScheme } from './infrastructure/requests.scheme';
import { RequestsController } from './infrastructure/requests.controller';
import { RequestToProfesionalScheme } from './infrastructure/request-to-profesional.scheme';
import { SaveRequestUseCase } from './application/save-request.use-case';
import { UpdateRequestUseCase } from './application/update-request.use-case';

@Module({
  imports: [
    TypeOrmModule.forFeature([RequestScheme, RequestToProfesionalScheme]),
  ],
  controllers: [RequestsController],
  exports: [RequestRepository],
  providers: [
    RequestRepository,
    {
      provide: GetListRequestUseCase,
      useFactory: (categoryRepo: RequestRepositoryInterface) => {
        return new GetListRequestUseCase(categoryRepo);
      },
      inject: [RequestRepository],
    },
    {
      provide: AddProfessionalUseCase,
      useFactory: (categoryRepo: RequestRepositoryInterface) => {
        return new AddProfessionalUseCase(categoryRepo);
      },
      inject: [RequestRepository],
    },
    {
      provide: GetRequestUseCase,
      useFactory: (categoryRepo: RequestRepositoryInterface) => {
        return new GetRequestUseCase(categoryRepo);
      },
      inject: [RequestRepository],
    },
    {
      provide: SaveRequestUseCase,
      useFactory: (categoryRepo: RequestRepositoryInterface) => {
        return new SaveRequestUseCase(categoryRepo);
      },
      inject: [RequestRepository],
    },
    {
      provide: UpdateRequestUseCase,
      useFactory: (categoryRepo: RequestRepositoryInterface) => {
        return new UpdateRequestUseCase(categoryRepo);
      },
      inject: [RequestRepository],
    },
    {
      provide: DeleteRequestUseCase,
      useFactory: (categoryRepo: RequestRepositoryInterface) => {
        return new DeleteRequestUseCase(categoryRepo);
      },
      inject: [RequestRepository],
    },
  ],
})
export class RequestsModule {}
