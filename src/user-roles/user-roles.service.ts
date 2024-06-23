import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserRolesModel } from './models/user-roles.model';

@Injectable()
export class UserRolesService {
  constructor(
    @InjectModel(UserRolesModel) private userRolesModel: typeof UserRolesModel,
  ) {}

  public async createUserRoles(
    userRole: CreateUserRoleDto,
  ): Promise<UserRolesModel> {
    const isUserRole = await this.userRolesModel.findOne({
      where: { value: userRole.value },
    });
    if (isUserRole) {
      throw new ConflictException(`role already exists`);
    } else {
      const createUserRole = new UserRolesModel();
      createUserRole.name = userRole.name;
      createUserRole.value = userRole.value;
      createUserRole.description = userRole.description;

      const created = await this.userRolesModel.create(
        createUserRole.dataValues,
      );
      return created;
    }
  }

  public async getUserRoles(id: string): Promise<UserRolesModel> {
    const isUserRole = await this.userRolesModel.findOne({
      where: { id: id },
    });
    if (!isUserRole) {
      throw new NotFoundException(`role not found`);
    } else {
      return isUserRole;
    }
  }
}
