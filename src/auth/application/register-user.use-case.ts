import { BcryptServiceInterface } from 'src/shared/domain/adapters/bcrypt.interface';
import { User } from 'src/users/domain/user.entity';
import { AuthRepositoryInterface } from '../domain/auth.repository.interface';

export class RegisterUserUseCase {
  constructor(
    private repository: AuthRepositoryInterface,
    private bcryptService: BcryptServiceInterface,
  ) {}

  async execute(userObject: registerUserInput) {
    const { password } = userObject;
    const plainToHash = await this.bcryptService.hash(password);
    userObject = { ...userObject, password: plainToHash };
    const user = User.create(userObject);
    return this.repository.signUpUser(user);
  }
}

type registerUserInput = {
  name: string;
  email: string;
  password: string;
};
