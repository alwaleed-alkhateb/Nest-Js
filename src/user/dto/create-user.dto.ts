import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 25)
  firstName!: string;
  @IsString()
  @IsNotEmpty()
  @Length(2, 25)
  lastName!: string;
  @IsNumber()
  @IsNotEmpty()
  age!: number;
}
