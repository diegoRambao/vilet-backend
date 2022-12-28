import { Category } from '../domain/category.entity';
import { CategoryRepositoryInterface } from '../domain/category.repository.interface';

export class GetCategoryUseCase {
  constructor(private repository: CategoryRepositoryInterface) {}

  async execute(id: number): Promise<Category> {
    return this.repository.getCategory(id);
  }
}
