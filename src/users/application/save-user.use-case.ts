import { UserRepositoryInterface } from '../domain/user.repository.interface';
import { User } from '../domain/user.entity';

export class SaveUserUseCase {
  constructor(private respository: UserRepositoryInterface) {}

  async execute(userInput: CreateUserInput): Promise<User> {
    const user = User.create(userInput);
    return this.respository.saveUser(user);
  }
}

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
  lastName: string;
  sex: string;
  age: number;
};
