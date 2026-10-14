import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  readonly firstName!: string;
  @IsOptional()
  @IsString()
  readonly lastName!: string;
  @IsOptional()
  @IsEmail()
  readonly email!: string;
}
