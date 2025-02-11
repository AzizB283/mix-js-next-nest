import { IsEmail, IsNumber, IsNumberString, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsString()
  password: string;
}
