import { ExceptionServiceInterface } from 'src/shared/domain/adapters/exceptions.interface';
import { UserRepositoryInterface } from 'src/users/domain/user.repository.interface';
import { AuthService } from '../infrastructure/services/auth.service';

export class LoginUserUseCase {
  constructor(
    private userRepository: UserRepositoryInterface,
    private authService: AuthService,
    private exceptionService: ExceptionServiceInterface,
  ) {}

  async execute(userLogin: LoginUserInput) {
    const { email, password } = userLogin;
    const findUser = await this.userRepository.getUserByEmail(email);

    if (!findUser) {
      this.exceptionService.UnauthorizedException();
    }

    return this.authService.validateCredentials(findUser, password);
  }
}

type LoginUserInput = {
  email: string;
  password: string;
};
