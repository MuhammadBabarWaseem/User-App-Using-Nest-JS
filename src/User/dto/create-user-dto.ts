import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
