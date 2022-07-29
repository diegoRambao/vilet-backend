import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import {
  ResponseFormat,
  ResponseInterceptor,
} from './shared/common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'api/v',
  });

  const config = new DocumentBuilder()
    .setTitle('NEST REST API')
    .setDescription('The REST API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [ResponseFormat],
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
