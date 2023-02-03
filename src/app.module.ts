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
import { CategoriesModule } from './categories/categories.module';
import { SubCategoriesModule } from './subcategories/categories.module';
import { RequestsModule } from './requests/requests.module';

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
    CategoriesModule,
    SubCategoriesModule,
    RequestsModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
