import { SaveUserUseCase } from './../application/save-user.use-case';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GetListUserUseCase } from '../application/get-list-user.use-case';
import { GetUserUseCase } from '../application/get-user.use-case';
import { UpdateUserUseCase } from '../application/update-user.use-case';
import { DeleteUserUseCase } from '../application/delete-user.use-case';

@Controller('users')
export class UsersController {
  constructor(
    private saveUseCase: SaveUserUseCase,
    private getUsers: GetListUserUseCase,
    private getUser: GetUserUseCase,
    private updateUser: UpdateUserUseCase,
    private deleteUser: DeleteUserUseCase,
  ) {}

  @Get()
  findAll() {
    return this.getUsers.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.getUser.execute(id);
  }

  @Post()
  create(@Body() createUser) {
    return this.saveUseCase.execute(createUser);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user) {
    this.updateUser.execute(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.deleteUser.execute(id);
  }
}
