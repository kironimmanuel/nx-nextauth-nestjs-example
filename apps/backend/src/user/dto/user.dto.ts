import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  role: 'user' | 'designer' | 'tester' | 'developer' | 'admin' | 'manager';
}
