import { Category } from './category.entity';

export interface CategoryRepositoryInterface {
  getListCategories(): Promise<Category[]>;
  getCategory(id: number): Promise<Category>;
  saveCategory(user: Category): Promise<Category>;
  updateCategory(id: number, user: Category): Promise<void>;
  deleteCategory(id: number): Promise<void>;
}
