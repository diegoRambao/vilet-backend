import { SubCategory } from 'src/subcategories/domain/subcategory.entity';

export interface CategoryProperty {
  id?: number;
  name: string;
  subcategories?: SubCategory[] | null;
}
export class Category {
  id: number;
  name: string;
  subcategories?: SubCategory[] | null;

  constructor({ name, id, subcategories }: CategoryProperty) {
    this.id = id;
    this.name = name;
    this.subcategories = subcategories;
  }

  static create({ name, id, subcategories }: CategoryProperty): Category {
    return new Category({
      name,
      id,
      subcategories,
    });
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      subcategories: this.subcategories,
    };
  }
}
