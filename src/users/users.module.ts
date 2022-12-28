import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './infrastructure/users.controller';
import { UserScheme } from './infrastructure/user.scheme';
import { UserRepository } from './infrastructure/user.repository';
import { SaveUserUseCase } from './application/save-user.use-case';
import { UserRepositoryInterface } from './domain/user.repository.interface';
import { GetUserUseCase } from './application/get-user.use-case';
import { GetListUserUseCase } from './application/get-list-user.use-case';
import { UpdateUserUseCase } from './application/update-user.use-case';
import { DeleteUserUseCase } from './application/delete-user.use-case';
import { ExceptionServiceInterface } from 'src/shared/domain/adapters/exceptions.interface';
import { ExceptionService } from 'src/shared/infrastructure/services/exceptions/exceptions.service';
import { ExceptionModule } from 'src/shared/infrastructure/services/exceptions/exceptions.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserScheme]), ExceptionModule],
  controllers: [UsersController],
  exports: [UserRepository],
  providers: [
    UserRepository,
    {
      provide: GetListUserUseCase,
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new GetListUserUseCase(userRepo);
      },
      inject: [UserRepository],
    },
    {
      provide: GetUserUseCase,
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new GetUserUseCase(userRepo);
      },
      inject: [UserRepository],
    },
    {
      provide: SaveUserUseCase,
      useFactory: (
        userRepo: UserRepositoryInterface,
        exceptionService: ExceptionServiceInterface,
      ) => {
        return new SaveUserUseCase(userRepo, exceptionService);
      },
      inject: [UserRepository, ExceptionService],
    },
    {
      provide: UpdateUserUseCase,
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new UpdateUserUseCase(userRepo);
      },
      inject: [UserRepository],
    },
    {
      provide: DeleteUserUseCase,
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new DeleteUserUseCase(userRepo);
      },
      inject: [UserRepository],
    },
  ],
})
export class UsersModule {}
