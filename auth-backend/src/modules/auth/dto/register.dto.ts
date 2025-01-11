import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class RegisterDTO {
  @IsNotEmpty()
  @Length(3, 20)
  name: string;

  @IsEmail()
  email: string;

  @Length(6, 30)
  password: string;
}
