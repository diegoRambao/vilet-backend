import { Category } from '../domain/category.entity';
import { CategoryRepositoryInterface } from '../domain/category.repository.interface';

export class GetListCategoryUseCase {
  constructor(private repository: CategoryRepositoryInterface) {}

  async execute(): Promise<Category[]> {
    return this.repository.getListCategories();
  }
}
