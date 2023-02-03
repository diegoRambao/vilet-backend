import { RequestRepositoryInterface } from '../domain/request.repository.interface';

export class AddProfessionalUseCase {
  constructor(private repository: RequestRepositoryInterface) {}

  async execute(professionalId: number, requestId: number): Promise<void> {
    return this.repository.addProfessional(professionalId, requestId);
  }
}
