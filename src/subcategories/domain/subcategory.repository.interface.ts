import { SubCategory } from './subcategory.entity';

export interface SubCategoryRepositoryInterface {
  getListCategories(): Promise<SubCategory[]>;
  getSubCategory(id: number): Promise<SubCategory>;
  saveSubCategory(user: SubCategory): Promise<SubCategory>;
  updateSubCategory(id: number, user: SubCategory): Promise<void>;
  deleteSubCategory(id: number): Promise<void>;
}
