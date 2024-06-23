import { IsNotEmpty } from 'class-validator';

export class UpdateUserRoleDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  value_info: string;

  @IsNotEmpty()
  description: string;
}
