import { SaveRequestUseCase } from '../application/save-request.use-case';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { AddProfessionalUseCase } from '../application/add-professional.use-case';
import { DeleteRequestUseCase } from '../application/delete-request.use-case';
import { GetListRequestUseCase } from '../application/get-list-request.use-case';
import { GetRequestUseCase } from '../application/get-request.use-case';
import { JwtAuthGuard } from '../../shared/common/guards/jwt-auth.guard';
import { UpdateRequestUseCase } from '../application/update-request.use-case';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('requests')
export class RequestsController {
  constructor(
    private saveUseCase: SaveRequestUseCase,
    private getRequests: GetListRequestUseCase,
    private getRequest: GetRequestUseCase,
    private updateRequest: UpdateRequestUseCase,
    private deleteRequest: DeleteRequestUseCase,
    private addProfessionalCase: AddProfessionalUseCase,
  ) {}

  @Get()
  findAll() {
    return this.getRequests.execute();
  }

  findOneById(id: number) {
    return this.getRequest.execute(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.getRequest.execute(id);
  }

  @Post()
  create(@Body() createRequest) {
    console.log(createRequest);
    return this.saveUseCase.execute(createRequest);
  }

  @Post('/addProfessional')
  addProfessional(@Body() body) {
    const { professionalId, requestId } = body;
    return this.addProfessionalCase.execute(professionalId, requestId);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user) {
    this.updateRequest.execute(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.deleteRequest.execute(id);
  }
}
