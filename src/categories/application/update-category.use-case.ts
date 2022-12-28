import { CategoryRepositoryInterface } from '../domain/category.repository.interface';
import { Category } from '../domain/category.entity';

export class UpdateCategoryUseCase {
  constructor(private respository: CategoryRepositoryInterface) {}

  async execute(id: number, userInput: Category): Promise<void> {
    const user = Category.create(userInput);
    return this.respository.updateCategory(id, user);
  }
}
