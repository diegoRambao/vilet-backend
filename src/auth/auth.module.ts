import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserScheme } from 'src/users/infrastructure/user.scheme';
import { AuthController } from '../auth/infrastructure/auth.controller';
import { BcryptModule } from '../shared/infrastructure/services/bcrypt/bcrypt.module';
import { RegisterUserUseCase } from './application/register-user.use-case';
import { AuthRepositoryInterface } from './domain/auth.repository.interface';
import { AuthRepository } from './infrastructure/auth.repository';
import { BcryptService } from '../shared/infrastructure/services/bcrypt/bcrypt.service';
import { LoginUserUseCase } from './application/login-user.use-case';
import { UserRepositoryInterface } from 'src/users/domain/user.repository.interface';
import { UserRepository } from 'src/users/infrastructure/user.repository';
import { UsersModule } from '../users/users.module';
import { BcryptServiceInterface } from 'src/shared/domain/adapters/bcrypt.interface';
import { EnvironmentConfigModule } from 'src/shared/infrastructure/environment-config/environment-config.module';
import { JwtServiceInterface } from 'src/shared/domain/adapters/jwt.interface';
import { JwtTokenService } from '../shared/infrastructure/services/jwt/jwt.service';
import { JwtTokenModule } from 'src/shared/infrastructure/services/jwt/jwt.module';
import { ExceptionModule } from '../shared/infrastructure/services/exceptions/exceptions.module';
import { ExceptionServiceInterface } from 'src/shared/domain/adapters/exceptions.interface';
import { ExceptionService } from 'src/shared/infrastructure/services/exceptions/exceptions.service';

@Module({
  imports: [
    EnvironmentConfigModule,
    TypeOrmModule.forFeature([UserScheme]),
    BcryptModule,
    JwtTokenModule,
    UsersModule,
    ExceptionModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthRepository,
    {
      provide: RegisterUserUseCase,
      useFactory: (
        authRepo: AuthRepositoryInterface,
        bcryptService: BcryptServiceInterface,
      ) => {
        return new RegisterUserUseCase(authRepo, bcryptService);
      },
      inject: [AuthRepository, BcryptService],
    },
    {
      provide: LoginUserUseCase,
      useFactory: (
        userRepo: UserRepositoryInterface,
        bcryptService: BcryptServiceInterface,
        jwtService: JwtServiceInterface,
        exceptionService: ExceptionServiceInterface,
      ) => {
        return new LoginUserUseCase(
          userRepo,
          bcryptService,
          jwtService,
          exceptionService,
        );
      },
      inject: [
        UserRepository,
        BcryptService,
        JwtTokenService,
        ExceptionService,
      ],
    },
  ],
})
export class AuthModule {}
