import { Category } from 'src/categories/domain/category.entity';
import { UserType } from 'src/shared/types/type.enum';

export interface UserProperty {
  id?: number;
  email: string;
  password: string;
  name: string;
  lastName?: string;
  type: UserType;
  categoryId?: number;
  category?: Category | null;
  description?: string;
  location?: string | number;
}
export class User {
  id: number;
  email: string;
  password: string;
  name: string;
  lastName?: string;
  type: UserType;
  categoryId?: number;
  description?: string;
  location?: string | number;
  category?: Category | null;

  constructor({
    name,
    email,
    password,
    lastName,
    id,
    categoryId,
    type,
    description,
    location,
    category,
  }: UserProperty) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.lastName = lastName;
    this.categoryId = categoryId;
    this.type = type;
    this.description = description;
    this.location = location;
    this.category = category;
  }

  static create({
    name,
    email,
    password,
    lastName,
    id,
    type,
    description,
    location,
    categoryId,
    category,
  }: UserProperty): User {
    return new User({
      name,
      email,
      password,
      lastName,
      id,
      type,
      description,
      location,
      categoryId,
      category,
    });
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      name: this.name,
      lastName: this.lastName,
      type: this.type,
      description: this.description,
      location: this.location,
      categoryId: this.categoryId,
      category: this.category,
    };
  }
}
