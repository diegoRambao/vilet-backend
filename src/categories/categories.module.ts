import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesController } from './infrastructure/categories.controller';
import { CategoryRepository } from './infrastructure/categories.repository';
import { CategoryRepositoryInterface } from './domain/category.repository.interface';
import { CategoryScheme } from './infrastructure/category.scheme';
import { DeleteCategoryUseCase } from './application/delete-category.use-case';
import { GetCategoryUseCase } from './application/get-category.use-case';
import { GetListCategoryUseCase } from './application/get-list-category.use-case';
import { SaveCategoryUseCase } from './application/save-category.use-case';
import { UpdateCategoryUseCase } from './application/update-category.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryScheme])],
  controllers: [CategoriesController],
  exports: [CategoryRepository],
  providers: [
    CategoryRepository,
    {
      provide: GetListCategoryUseCase,
      useFactory: (userRepo: CategoryRepositoryInterface) => {
        return new GetListCategoryUseCase(userRepo);
      },
      inject: [CategoryRepository],
    },
    {
      provide: GetCategoryUseCase,
      useFactory: (userRepo: CategoryRepositoryInterface) => {
        return new GetCategoryUseCase(userRepo);
      },
      inject: [CategoryRepository],
    },
    {
      provide: SaveCategoryUseCase,
      useFactory: (userRepo: CategoryRepositoryInterface) => {
        return new SaveCategoryUseCase(userRepo);
      },
      inject: [CategoryRepository],
    },
    {
      provide: UpdateCategoryUseCase,
      useFactory: (userRepo: CategoryRepositoryInterface) => {
        return new UpdateCategoryUseCase(userRepo);
      },
      inject: [CategoryRepository],
    },
    {
      provide: DeleteCategoryUseCase,
      useFactory: (userRepo: CategoryRepositoryInterface) => {
        return new DeleteCategoryUseCase(userRepo);
      },
      inject: [CategoryRepository],
    },
  ],
})
export class CategoriesModule {}
