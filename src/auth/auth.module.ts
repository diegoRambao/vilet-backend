import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from '../auth/infrastructure/auth.controller';
import { AuthRepository } from './infrastructure/auth.repository';
import { AuthRepositoryInterface } from './domain/auth.repository.interface';
import { BcryptModule } from '../shared/infrastructure/services/bcrypt/bcrypt.module';
import { BcryptService } from '../shared/infrastructure/services/bcrypt/bcrypt.service';
import { BcryptServiceInterface } from 'src/shared/domain/adapters/bcrypt.interface';
import { EnvironmentConfigModule } from 'src/shared/infrastructure/environment-config/environment-config.module';
import { ExceptionModule } from '../shared/infrastructure/services/exceptions/exceptions.module';
import { ExceptionService } from 'src/shared/infrastructure/services/exceptions/exceptions.service';
import { ExceptionServiceInterface } from 'src/shared/domain/adapters/exceptions.interface';
import { JwtServiceInterface } from 'src/shared/domain/adapters/jwt.interface';
import { JwtTokenModule } from 'src/shared/infrastructure/services/jwt/jwt.module';
import { JwtTokenService } from '../shared/infrastructure/services/jwt/jwt.service';
import { LoginUserUseCase } from './application/login-user.use-case';
import { RegisterUserUseCase } from './application/register-user.use-case';
import { UserRepository } from 'src/users/infrastructure/user.repository';
import { UserRepositoryInterface } from 'src/users/domain/user.repository.interface';
import { UserScheme } from 'src/users/infrastructure/user.scheme';
import { UsersModule } from '../users/users.module';
import { AuthService } from './infrastructure/services/auth.service';

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
    {
      provide: AuthService,
      useFactory: (
        bcryptService: BcryptServiceInterface,
        exceptionService: ExceptionServiceInterface,
        jwtService: JwtServiceInterface,
      ) => {
        return new AuthService(bcryptService, exceptionService, jwtService);
      },
      inject: [BcryptService, ExceptionService, JwtTokenService],
    },
    AuthRepository,
    {
      provide: RegisterUserUseCase,
      useFactory: (
        authRepo: AuthRepositoryInterface,
        userRepository: UserRepositoryInterface,
        bcryptService: BcryptServiceInterface,
        authService: AuthService,
        exceptionService: ExceptionServiceInterface,
      ) => {
        return new RegisterUserUseCase(
          authRepo,
          userRepository,
          bcryptService,
          authService,
          exceptionService,
        );
      },
      inject: [
        AuthRepository,
        UserRepository,
        BcryptService,
        AuthService,
        ExceptionService,
      ],
    },
    {
      provide: LoginUserUseCase,
      useFactory: (
        userRepo: UserRepositoryInterface,
        authService: AuthService,
        exceptionService: ExceptionServiceInterface,
      ) => {
        return new LoginUserUseCase(userRepo, authService, exceptionService);
      },
      inject: [UserRepository, AuthService, ExceptionService],
    },
  ],
})
export class AuthModule {}
