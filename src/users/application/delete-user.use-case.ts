import { UserRepositoryInterface } from '../domain/user.repository.interface';

export class DeleteUserUseCase {
  constructor(private repository: UserRepositoryInterface) {}

  async execute(id: number): Promise<void> {
    return this.repository.deleteUser(id);
  }
}
