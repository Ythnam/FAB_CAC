import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('FaB CaC')
    .setDescription('The FaB Cac API description')
    .setVersion('1.0')
    .addOAuth2({
      type: 'oauth2',
      flows: {
        password: {
          tokenUrl: 'http://localhost:3000/auth/login',
          scopes: {},
        },
      },
    })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
