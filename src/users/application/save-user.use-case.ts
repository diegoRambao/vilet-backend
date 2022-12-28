import { UserRepositoryInterface } from '../domain/user.repository.interface';
import { User, UserProperty } from '../domain/user.entity';
import { ExceptionServiceInterface } from 'src/shared/domain/adapters/exceptions.interface';

export class SaveUserUseCase {
  constructor(
    private respository: UserRepositoryInterface,
    private exceptionService: ExceptionServiceInterface,
  ) {}

  async execute(userInput: CreateUserInput): Promise<User> {
    const userSearched = await this.respository.getUserByEmail(userInput.email);
    console.log(userSearched);
    if (userSearched) {
      this.exceptionService.httException({
        message: 'userExist',
        statusCode: 409,
      });
    }

    const user = User.create(userInput);
    return this.respository.saveUser(user);
  }
}

type CreateUserInput = Omit<UserProperty, 'id'>;
