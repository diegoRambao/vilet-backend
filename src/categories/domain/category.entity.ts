export interface CategoryProperty {
  id?: number;
  name: string;
}
export class Category {
  id: number;
  name: string;

  constructor({ name, id }: CategoryProperty) {
    this.id = id;
    this.name = name;
  }

  static create({ name, id }: CategoryProperty): Category {
    return new Category({
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
