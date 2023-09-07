import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // If the body contains properties that are not in the DTO, throw an error
      forbidNonWhitelisted: true,
      // Automatically transform the body to the DTO type (id: '1' => id: 1)
      transform: true,
    }),
  );

  await app.listen(8000);
}
bootstrap();
