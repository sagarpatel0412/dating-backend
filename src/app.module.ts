import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserRolesModule } from './user-roles/user-roles.module';
import * as Validation from '@hapi/joi'

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      validationSchema: Validation.object({
        SALT: Validation.string().required(),
        PORT: Validation.number().port().required(),
        POSTGRES_HOST: Validation.string().required(),
        POSTGRES_PORT: Validation.number().port().required(),
        POSTGRES_DB: Validation.string().required(),
        POSTGRES_USERNAME: Validation.string().required(),
        POSTGRES_PASSWORD: Validation.string().required(),
        NODE_ENV: Validation.string().required(),
      }),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: "localhost",
      port: 5432,
      database: "dating_back",
      username: 'postgres',
      password: 'root',
      autoLoadModels: true,
      synchronize: false,
    }),
    UserRolesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
