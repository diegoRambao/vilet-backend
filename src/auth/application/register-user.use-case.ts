import { BcryptServiceInterface } from 'src/shared/domain/adapters/bcrypt.interface';
import { ExceptionServiceInterface } from 'src/shared/domain/adapters/exceptions.interface';
import { UserType } from 'src/shared/types/type.enum';
import { User } from 'src/users/domain/user.entity';
import { UserRepositoryInterface } from 'src/users/domain/user.repository.interface';
import { AuthRepositoryInterface } from '../domain/auth.repository.interface';
import { AuthService } from '../infrastructure/services/auth.service';

export class RegisterUserUseCase {
  constructor(
    private repository: AuthRepositoryInterface,
    private userRepository: UserRepositoryInterface,
    private bcryptService: BcryptServiceInterface,
    private authService: AuthService,
    private exceptionService: ExceptionServiceInterface,
  ) {}

  async execute(userObject: registerUserInput) {
    const userSearched = await this.userRepository.getUserByEmail(
      userObject.email,
    );
    if (userSearched) {
      return this.exceptionService.httException({
        message: 'userExist',
        statusCode: 409,
      });
    }
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
  type: UserType;
  phone: string;
};
