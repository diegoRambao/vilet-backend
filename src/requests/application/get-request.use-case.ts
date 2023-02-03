import { Request } from '../domain/request.entity';
import { RequestRepositoryInterface } from '../domain/request.repository.interface';

export class GetRequestUseCase {
  constructor(private repository: RequestRepositoryInterface) {}

  async execute(id: number): Promise<Request> {
    return this.repository.getRequest(id);
  }
}
