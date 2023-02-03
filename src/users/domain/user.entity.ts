import { Category } from 'src/categories/domain/category.entity';
import { UserType } from 'src/shared/types/type.enum';

export interface UserProperty {
  id?: number;
  email: string;
  password: string;
  name: string;
  phone: string;
  lastName?: string;
  type: UserType;
  categoryId?: number;
  category?: Category | null;
  description?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  place?: string;
  placName?: string;
  region?: string;
}
export class User {
  id: number;
  email: string;
  password: string;
  name: string;
  phone: string;
  lastName?: string;
  type: UserType;
  categoryId?: number;
  description?: string;
  category?: Category | null;
  country?: string;
  latitude?: number;
  longitude?: number;
  place?: string;
  placName?: string;
  region?: string;

  constructor({
    name,
    email,
    password,
    lastName,
    id,
    categoryId,
    type,
    description,
    category,
    phone,
    country,
    latitude,
    longitude,
    place,
    placName,
    region,
  }: UserProperty) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.lastName = lastName;
    this.categoryId = categoryId;
    this.type = type;
    this.description = description;
    this.category = category;
    this.phone = phone;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
    this.place = place;
    this.placName = placName;
    this.region = region;
  }

  static create({
    name,
    email,
    password,
    lastName,
    id,
    type,
    description,
    categoryId,
    category,
    phone,
    country,
    latitude,
    longitude,
    place,
    placName,
    region,
  }: UserProperty): User {
    return new User({
      name,
      email,
      password,
      lastName,
      id,
      type,
      description,
      categoryId,
      category,
      phone,
      country,
      latitude,
      longitude,
      place,
      placName,
      region,
    });
  }

  public toJSON() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      name: this.name,
      lastName: this.lastName,
      type: this.type,
      description: this.description,
      categoryId: this.categoryId,
      category: this.category,
      phone: this.phone,
      country: this.country,
      latitude: this.latitude,
      longitude: this.longitude,
      place: this.place,
      placName: this.placName,
      region: this.region,
    };
  }
}
