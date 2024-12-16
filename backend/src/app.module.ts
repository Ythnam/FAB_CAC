import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvidersModule } from './providers.module';
import { ControllersModule } from './gateway/controllers/controllers.module';

@Module({
  imports: [
    ProvidersModule,
    ControllersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'example',
      database: 'postgres',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // TODO: To be removed in PROD
    }),
  ],
})
export class AppModule {}
