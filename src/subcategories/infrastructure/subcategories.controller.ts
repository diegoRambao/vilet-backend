import { SaveSubCategoryUseCase } from '../application/save-subcategory.use-case';
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
import { GetListSubCategoryUseCase } from '../application/get-list-subcategory.use-case';
import { GetSubCategoryUseCase } from '../application/get-subcategory.use-case';
import { UpdateSubCategoryUseCase } from '../application/update-subcategory.use-case';
import { DeleteSubCategoryUseCase } from '../application/delete-subcategory.use-case';
import { JwtAuthGuard } from '../../shared/common/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('subcategories')
export class SubCategoriesController {
  constructor(
    private saveUseCase: SaveSubCategoryUseCase,
    private getSubCategories: GetListSubCategoryUseCase,
    private getSubCategory: GetSubCategoryUseCase,
    private updateSubCategory: UpdateSubCategoryUseCase,
    private deleteSubCategory: DeleteSubCategoryUseCase,
  ) {}

  @Get()
  findAll() {
    return this.getSubCategories.execute();
  }

  findOneById(id: number) {
    return this.getSubCategory.execute(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.getSubCategory.execute(id);
  }

  @Post()
  create(@Body() createSubCategory) {
    return this.saveUseCase.execute(createSubCategory);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user) {
    this.updateSubCategory.execute(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.deleteSubCategory.execute(id);
  }
}
