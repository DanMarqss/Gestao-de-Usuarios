import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS globalmente
  app.enableCors();

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Documentação da API')
    .setDescription('API criada com NestJS')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(4000);
}
bootstrap();
