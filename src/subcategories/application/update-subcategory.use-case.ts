import { SubCategoryRepositoryInterface } from '../domain/subcategory.repository.interface';
import { SubCategory } from '../domain/subcategory.entity';

export class UpdateSubCategoryUseCase {
  constructor(private respository: SubCategoryRepositoryInterface) {}

  async execute(id: number, userInput: SubCategory): Promise<void> {
    const user = SubCategory.create(userInput);
    return this.respository.updateSubCategory(id, user);
  }
}
