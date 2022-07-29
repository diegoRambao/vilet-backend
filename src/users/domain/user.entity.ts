interface UserProperty {
  id?: number;
  email: string;
  password: string;
  name: string;
  lastName?: string;
  sex?: string;
  age?: number;
}
export class User {
  id: number;
  email: string;
  password: string;
  name: string;
  lastName?: string;
  sex?: string;
  age?: number;

  constructor({ name, email, password, lastName, sex, age, id }: UserProperty) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.lastName = lastName;
    this.sex = sex;
    this.age = age;
  }

  static create({
    name,
    email,
    password,
    lastName,
    sex,
    age,
    id,
  }: UserProperty): User {
    return new User({ name, email, password, lastName, sex, age, id });
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      name: this.name,
      lastName: this.lastName,
      sex: this.sex,
      age: this.age,
    };
  }
}
