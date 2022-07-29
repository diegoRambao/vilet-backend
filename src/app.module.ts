import { Module } from '@nestjs/common';
import { LoggerModule } from './shared/infrastructure/logger/logger.module';
import { EnvironmentConfigModule } from './shared/infrastructure/environment-config/environment-config.module';
import { TypeOrmConfigModule } from './shared/infrastructure/config/typeorm/typeorm.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BcryptModule } from './shared/infrastructure/services/bcrypt/bcrypt.module';
import { JwtTokenModule } from './shared/infrastructure/services/jwt/jwt.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './shared/common/strategies/jwt.strategy';

console.log(process.env.JWT_SECRET);

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
    TypeOrmConfigModule,
    LoggerModule,
    BcryptModule,
    JwtTokenModule,
    EnvironmentConfigModule,
    UsersModule,
    AuthModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
