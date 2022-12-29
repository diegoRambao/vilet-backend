import { SubCategoryRepositoryInterface } from '../domain/subcategory.repository.interface';

export class DeleteSubCategoryUseCase {
  constructor(private repository: SubCategoryRepositoryInterface) {}

  async execute(id: number): Promise<void> {
    return this.repository.deleteSubCategory(id);
  }
}
