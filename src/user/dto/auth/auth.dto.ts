import { isEmail, IsEmail, IsString, Length } from 'class-validator';

export class SignInDto {
  @IsEmail()
  email!: string;
  @IsString()
  @Length(8, 20)
  password!: string;
}

export class SignUpDto {
  @IsEmail()
  email!: string;
  @IsString()
  @Length(3, 20)
  username!: string;
  @IsString()
  @Length(8, 20)
  password!: string;
  @IsString()
  @Length(2, 100)
  firstName!: string;
  @IsString()
  @Length(2, 100)
  lastName!: string;
}
