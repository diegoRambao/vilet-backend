import { User } from '../domain/user.entity';
import { UserRepositoryInterface } from '../domain/user.repository.interface';

export class GetListUserUseCase {
  constructor(private repository: UserRepositoryInterface) {}

  async execute(): Promise<User[]> {
    return this.repository.getListUsers();
  }
}
