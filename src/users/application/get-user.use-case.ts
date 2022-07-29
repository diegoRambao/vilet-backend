import { User } from '../domain/user.entity';
import { UserRepositoryInterface } from '../domain/user.repository.interface';

export class GetUserUseCase {
  constructor(private repository: UserRepositoryInterface) {}

  async execute(id: number): Promise<User> {
    return this.repository.getUser(id);
  }
}
