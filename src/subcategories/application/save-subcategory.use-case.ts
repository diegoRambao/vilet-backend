import { SubCategoryRepositoryInterface } from '../domain/subcategory.repository.interface';
import { SubCategory, SubCategoryProperty } from '../domain/subcategory.entity';

export class SaveSubCategoryUseCase {
  constructor(private respository: SubCategoryRepositoryInterface) {}

  async execute(userInput: CreateSubCategoryInput): Promise<SubCategory> {
    const user = SubCategory.create(userInput);
    return this.respository.saveSubCategory(user);
  }
}

type CreateSubCategoryInput = Omit<SubCategoryProperty, 'id'>;
