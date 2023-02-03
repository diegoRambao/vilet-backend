import { RequestRepositoryInterface } from '../domain/request.repository.interface';

export class DeleteRequestUseCase {
  constructor(private repository: RequestRepositoryInterface) {}

  async execute(id: number): Promise<void> {
    return this.repository.deleteRequest(id);
  }
}
