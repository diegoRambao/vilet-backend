import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubCategoriesController } from './infrastructure/subcategories.controller';
import { SubCategoryScheme } from './infrastructure/subcategory.scheme';
import { SubCategoryRepository } from './infrastructure/subcategories.repository';
import { SaveSubCategoryUseCase } from './application/save-subcategory.use-case';
import { SubCategoryRepositoryInterface } from './domain/subcategory.repository.interface';
import { GetSubCategoryUseCase } from './application/get-subcategory.use-case';
import { GetListSubCategoryUseCase } from './application/get-list-subcategory.use-case';
import { UpdateSubCategoryUseCase } from './application/update-subcategory.use-case';
import { DeleteSubCategoryUseCase } from './application/delete-subcategory.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([SubCategoryScheme])],
  controllers: [SubCategoriesController],
  exports: [SubCategoryRepository],
  providers: [
    SubCategoryRepository,
    {
      provide: GetListSubCategoryUseCase,
      useFactory: (userRepo: SubCategoryRepositoryInterface) => {
        return new GetListSubCategoryUseCase(userRepo);
      },
      inject: [SubCategoryRepository],
    },
    {
      provide: GetSubCategoryUseCase,
      useFactory: (userRepo: SubCategoryRepositoryInterface) => {
        return new GetSubCategoryUseCase(userRepo);
      },
      inject: [SubCategoryRepository],
    },
    {
      provide: SaveSubCategoryUseCase,
      useFactory: (userRepo: SubCategoryRepositoryInterface) => {
        return new SaveSubCategoryUseCase(userRepo);
      },
      inject: [SubCategoryRepository],
    },
    {
      provide: UpdateSubCategoryUseCase,
      useFactory: (userRepo: SubCategoryRepositoryInterface) => {
        return new UpdateSubCategoryUseCase(userRepo);
      },
      inject: [SubCategoryRepository],
    },
    {
      provide: DeleteSubCategoryUseCase,
      useFactory: (userRepo: SubCategoryRepositoryInterface) => {
        return new DeleteSubCategoryUseCase(userRepo);
      },
      inject: [SubCategoryRepository],
    },
  ],
})
export class SubCategoriesModule {}
