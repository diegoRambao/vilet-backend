import { Module } from '@nestjs/common';
import { LoggerModule } from './shared/infrastructure/logger/logger.module';
import { EnvironmentConfigModule } from './shared/infrastructure/environment-config/environment-config.module';
import { TypeOrmConfigModule } from './shared/infrastructure/config/typeorm/typeorm.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmConfigModule,
    LoggerModule,
    EnvironmentConfigModule,
    UsersModule,
  ],
})
export class AppModule {}
