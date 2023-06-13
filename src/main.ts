import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  // app.use(cookieParser());
  app.enableCors({
    origin: 'https://opca-monkeypox.web.app',
    credentials: true
  });
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  await app.listen(port);
}
bootstrap();
