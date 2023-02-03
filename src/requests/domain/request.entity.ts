import { Category } from 'src/categories/domain/category.entity';
import { User } from 'src/users/domain/user.entity';

export interface ProfesionalWithStatus extends Omit<User, 'password'> {
  status?: string;
}

export interface RequestProperty {
  id?: number;
  category: Category;
  client: User;
  description?: string;
  latitude?: number;
  longitude?: number;
  placeName?: string;
  state?: 'A' | 'C';
  professionals?: ProfesionalWithStatus[];
}
export class Request implements RequestProperty {
  id: number;
  name: string;
  professionals?: ProfesionalWithStatus[];
  category: Category;
  client: User;
  description?: string;
  latitude?: number;
  longitude?: number;
  placeName?: string;
  state?: 'A' | 'C';

  constructor({
    id,
    category,
    client,
    placeName,
    description,
    latitude,
    longitude,
    professionals,
    state,
  }: RequestProperty) {
    this.id = id;
    this.category = category;
    this.client = client;
    this.placeName = placeName;
    this.description = description;
    this.latitude = latitude;
    this.longitude = longitude;
    this.professionals = professionals;
    this.state = state;
  }

  static create({
    id,
    category,
    client,
    placeName,
    description,
    latitude,
    longitude,
    professionals,
    state,
  }: RequestProperty): Request {
    return new Request({
      id,
      category,
      client,
      placeName,
      description,
      latitude,
      longitude,
      professionals,
      state,
    });
  }

  toJSON(): Required<RequestProperty> {
    return {
      id: this.id,
      category: this.category,
      client: this.client,
      placeName: this.placeName,
      description: this.description,
      latitude: this.latitude,
      longitude: this.longitude,
      professionals: this.professionals,
      state: this.state,
    };
  }
}
