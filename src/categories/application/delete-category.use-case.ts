import { CategoryRepositoryInterface } from '../domain/category.repository.interface';

export class DeleteCategoryUseCase {
  constructor(private repository: CategoryRepositoryInterface) {}

  async execute(id: number): Promise<void> {
    return this.repository.deleteCategory(id);
  }
}
