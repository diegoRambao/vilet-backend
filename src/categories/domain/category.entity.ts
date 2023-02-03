import { SubCategory } from 'src/subcategories/domain/subcategory.entity';

export interface CategoryProperty {
  id?: number;
  name: string;
  icon: string;
  subcategories?: SubCategory[] | null;
}
export class Category {
  id: number;
  name: string;
  icon: string;
  subcategories?: SubCategory[] | null;

  constructor({ name, id, subcategories, icon }: CategoryProperty) {
    this.id = id;
    this.name = name;
    this.subcategories = subcategories;
    this.icon = icon;
  }

  static create({ name, id, subcategories, icon }: CategoryProperty): Category {
    return new Category({
      name,
      id,
      subcategories,
      icon,
    });
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      subcategories: this.subcategories,
      icon: this.icon,
    };
  }
}
