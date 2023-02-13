import { IsEmail, IsString } from 'class-validator';

export class updateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
