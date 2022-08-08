import { Injectable } from '@nestjs/common';
import { BcryptServiceInterface } from 'src/shared/domain/adapters/bcrypt.interface';
import { ExceptionServiceInterface } from 'src/shared/domain/adapters/exceptions.interface';
import { JwtServiceInterface } from 'src/shared/domain/adapters/jwt.interface';
import { User } from 'src/users/domain/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private bcryptService: BcryptServiceInterface,
    private exceptionService: ExceptionServiceInterface,
    private jwtService: JwtServiceInterface,
  ) {}

  async validateCredentials(user: User, passwordNotEncrypt: string) {
    const checkPassword = await this.bcryptService.compare(
      passwordNotEncrypt,
      user.password,
    );
    if (!checkPassword) this.exceptionService.UnauthorizedException();

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    const token = this.jwtService.createToken(payload);
    delete user.password;
    return {
      user: user,
      token,
    };
  }
}
