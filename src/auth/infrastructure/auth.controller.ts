import { Body, Controller, Post } from '@nestjs/common';

import { LoginAuthDto } from './dto/login.auth.dto';
import { LoginUserUseCase } from '../application/login-user.use-case';
import { RegisterAuthDto } from './dto/register.auth.dto';
import { RegisterUserUseCase } from '../application/register-user.use-case';

@Controller('auth')
export class AuthController {
  constructor(
    private registerUserUseCase: RegisterUserUseCase,
    private loginUserUseCase: LoginUserUseCase,
  ) {}

  @Post('register')
  registerUser(@Body() userObject: RegisterAuthDto) {
    return this.registerUserUseCase.execute(userObject);
  }

  @Post('login')
  loginUser(@Body() userObjectLogin: LoginAuthDto) {
    return this.loginUserUseCase.execute(userObjectLogin);
  }
}
