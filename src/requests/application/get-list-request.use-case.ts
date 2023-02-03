import { Request } from '../domain/request.entity';
import { RequestRepositoryInterface } from '../domain/request.repository.interface';

export class GetListRequestUseCase {
  constructor(private repository: RequestRepositoryInterface) {}

  async execute(): Promise<Request[]> {
    return this.repository.getListRequests();
  }
}
