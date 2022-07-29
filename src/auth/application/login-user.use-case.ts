import { HttpException } from '@nestjs/common';
import { BcryptServiceInterface } from 'src/shared/domain/adapters/bcrypt.interface';
import { ExceptionServiceInterface } from 'src/shared/domain/adapters/exceptions.interface';
import { JwtServiceInterface } from 'src/shared/domain/adapters/jwt.interface';
import { UserRepositoryInterface } from 'src/users/domain/user.repository.interface';

export class LoginUserUseCase {
  constructor(
    private userRepository: UserRepositoryInterface,
    private bcryptService: BcryptServiceInterface,
    private jwtService: JwtServiceInterface,
    private exceptionService: ExceptionServiceInterface,
  ) {}

  async execute(userLogin: LoginUserInput) {
    const { email, password } = userLogin;
    const findUser = await this.userRepository.getUserByEmail(email);
    const checkPassword = await this.bcryptService.compare(
      password,
      findUser.password,
    );
    if (!checkPassword) this.exceptionService.UnauthorizedException();

    const payload = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
    };
    const token = this.jwtService.createToken(payload);
    delete findUser.password;
    return {
      user: findUser,
      token,
    };
  }
}

type LoginUserInput = {
  email: string;
  password: string;
};
