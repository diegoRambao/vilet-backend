import { User } from './user.entity';

export interface UserRepositoryInterface {
  getListUsers(): Promise<User[]>;
  getUser(id: number): Promise<User>;
  saveUser(user: User): Promise<User>;
  updateUser(id: number, user: User): Promise<void>;
  deleteUser(id: number): Promise<void>;
  getUserByEmail(email: string): Promise<User>;
}
