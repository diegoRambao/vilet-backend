import { CategoryRepositoryInterface } from '../domain/category.repository.interface';
import { Category, CategoryProperty } from '../domain/category.entity';

export class SaveCategoryUseCase {
  constructor(private respository: CategoryRepositoryInterface) {}

  async execute(userInput: CreateCategoryInput): Promise<Category> {
    const user = Category.create(userInput);
    return this.respository.saveCategory(user);
  }
}

type CreateCategoryInput = Omit<CategoryProperty, 'id'>;
