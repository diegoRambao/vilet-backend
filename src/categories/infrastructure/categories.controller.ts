import { SaveCategoryUseCase } from '../application/save-category.use-case';
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
import { GetListCategoryUseCase } from '../application/get-list-category.use-case';
import { GetCategoryUseCase } from '../application/get-category.use-case';
import { UpdateCategoryUseCase } from '../application/update-category.use-case';
import { DeleteCategoryUseCase } from '../application/delete-category.use-case';
import { JwtAuthGuard } from '../../shared/common/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoriesController {
  constructor(
    private saveUseCase: SaveCategoryUseCase,
    private getCategories: GetListCategoryUseCase,
    private getCategory: GetCategoryUseCase,
    private updateCategory: UpdateCategoryUseCase,
    private deleteCategory: DeleteCategoryUseCase,
  ) {}

  @Get()
  findAll() {
    return this.getCategories.execute();
  }

  findOneById(id: number) {
    return this.getCategory.execute(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.getCategory.execute(id);
  }

  @Post()
  create(@Body() createCategory) {
    return this.saveUseCase.execute(createCategory);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user) {
    this.updateCategory.execute(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.deleteCategory.execute(id);
  }
}
