import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Request } from '../domain/request.entity';
import { RequestRepositoryInterface } from '../domain/request.repository.interface';
import { RequestToProfesionalScheme } from './request-to-profesional.scheme';
import { RequestScheme } from './requests.scheme';

@Injectable()
export class RequestRepository implements RequestRepositoryInterface {
  constructor(
    @InjectRepository(RequestScheme)
    private readonly ormRepo: Repository<RequestScheme>,
    @InjectRepository(RequestToProfesionalScheme)
    private readonly ormRepoRequestToProfesional: Repository<RequestToProfesionalScheme>,
  ) {}

  async getListRequests(): Promise<Request[]> {
    const requestsEntity = await this.ormRepo.find({
      relations: [
        'category',
        'client',
        'professionals',
        'professionals.professional',
      ],
    });
    return requestsEntity.map((request) => Request.create(request));
  }

  async getRequest(id: number): Promise<Request> {
    const requestEntity = await this.ormRepo.findOne({
      where: { id },
      relations: [
        'category',
        'client',
        'professionals',
        'professionals.professional',
      ],
    });
    return !requestEntity ? null : Request.create(requestEntity);
  }

  saveRequest(request: Request): Promise<Request> {
    request.state = request?.state || 'A';
    return this.ormRepo.save(request);
  }

  async addProfessional(
    professionalId: number,
    requestId: number,
  ): Promise<void> {
    this.ormRepoRequestToProfesional.save({
      professionalId,
      requestId,
      status: 1,
    });
  }

  async updateRequest(id: number, request: Request): Promise<void> {
    await this.ormRepo.update(
      {
        id,
      },
      request,
    );
  }

  async deleteRequest(id: number): Promise<void> {
    await this.ormRepo.update(
      {
        id,
      },
      {
        deleteAt: new Date(),
      },
    );
  }
}
