import { IsNotEmpty } from 'class-validator';

export class CreateUserRoleDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  value: string;

  @IsNotEmpty()
  description: string;
}
