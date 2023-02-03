import { RequestRepositoryInterface } from '../domain/request.repository.interface';
import { Request, RequestProperty } from '../domain/request.entity';

export class SaveRequestUseCase {
  constructor(private respository: RequestRepositoryInterface) {}

  async execute(userInput: CreateRequestInput): Promise<Request> {
    const user = Request.create(userInput);
    return this.respository.saveRequest(user);
  }
}

type CreateRequestInput = Omit<RequestProperty, 'id'>;
