import { UserRepositoryInterface } from '../domain/user.repository.interface';
import { User } from '../domain/user.entity';

export class UpdateUserUseCase {
  constructor(private respository: UserRepositoryInterface) {}

  async execute(id: number, userInput: User): Promise<void> {
    const user = User.create(userInput);
    return this.respository.updateUser(id, user);
  }
}
