import { RequestRepositoryInterface } from '../domain/request.repository.interface';
import { Request } from '../domain/request.entity';

export class UpdateRequestUseCase {
  constructor(private respository: RequestRepositoryInterface) {}

  async execute(id: number, userInput: Request): Promise<void> {
    const user = Request.create(userInput);
    return this.respository.updateRequest(id, user);
  }
}
