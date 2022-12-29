export interface SubCategoryProperty {
  id?: number;
  name: string;
}
export class SubCategory {
  id: number;
  name: string;

  constructor({ name, id }: SubCategoryProperty) {
    this.id = id;
    this.name = name;
  }

  static create({ name, id }: SubCategoryProperty): SubCategory {
    return new SubCategory({
      name,
      id,
    });
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
