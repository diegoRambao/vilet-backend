import { BcryptServiceInterface } from 'src/shared/domain/adapters/bcrypt.interface';
import { ExceptionServiceInterface } from 'src/shared/domain/adapters/exceptions.interface';
import { JwtServiceInterface } from 'src/shared/domain/adapters/jwt.interface';
import { User } from 'src/users/domain/user.entity';
import { AuthRepositoryInterface } from '../domain/auth.repository.interface';
import { AuthService } from '../infrastructure/services/auth.service';

export class RegisterUserUseCase {
  constructor(
    private repository: AuthRepositoryInterface,
    private bcryptService: BcryptServiceInterface,
    private authService: AuthService,
  ) {}

  async execute(userObject: registerUserInput) {
    const { password } = userObject;
    const plainToHash = await this.bcryptService.hash(password);
    userObject = { ...userObject, password: plainToHash };
    const user = User.create(userObject);
    const registeredUser = await this.repository.signUpUser(user);
    return this.authService.validateCredentials(registeredUser, password);
  }
}

type registerUserInput = {
  name: string;
  email: string;
  password: string;
};
