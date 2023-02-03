import { Request } from './request.entity';

export interface RequestRepositoryInterface {
  getListRequests(): Promise<Request[]>;
  getRequest(id: number): Promise<Request>;
  saveRequest(user: Request): Promise<Request>;
  updateRequest(id: number, user: Request): Promise<void>;
  deleteRequest(id: number): Promise<void>;
  addProfessional(professionalId: number, requestId: number): Promise<void>;
}
