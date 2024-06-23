import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { Request, Response } from 'express';

@Controller('user-roles')
export class UserRolesController {
  constructor(private readonly userRolesService: UserRolesService) {}

  @Post()
  async createUserRoles(
    @Body() userRole: CreateUserRoleDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const data = await this.userRolesService.createUserRoles(userRole);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  @Get(':id')
  async getUserRole(@Req() req: Request, @Res() res: Response) {
    try {
      const data = await this.userRolesService.getUserRoles(req.params.id);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
