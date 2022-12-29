import { SubCategory } from '../domain/subcategory.entity';
import { SubCategoryRepositoryInterface } from '../domain/subcategory.repository.interface';

export class GetSubCategoryUseCase {
  constructor(private repository: SubCategoryRepositoryInterface) {}

  async execute(id: number): Promise<SubCategory> {
    return this.repository.getSubCategory(id);
  }
}
