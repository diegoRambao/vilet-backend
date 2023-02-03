import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { UserType } from 'src/shared/types/type.enum';
import { LoginAuthDto } from './login.auth.dto';

export class RegisterAuthDto extends LoginAuthDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  type: UserType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  phone: string;
}
