import { SubCategory } from '../domain/subcategory.entity';
import { SubCategoryRepositoryInterface } from '../domain/subcategory.repository.interface';

export class GetListSubCategoryUseCase {
  constructor(private repository: SubCategoryRepositoryInterface) {}

  async execute(): Promise<SubCategory[]> {
    return this.repository.getListCategories();
  }
}
