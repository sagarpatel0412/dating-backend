import { Module } from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { UserRolesController } from './user-roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRolesModel } from './models/user-roles.model';

@Module({
  imports:[SequelizeModule.forFeature([UserRolesModel])],
  controllers: [UserRolesController],
  providers: [UserRolesService],
})
export class UserRolesModule {}
