import { User } from '../../users/domain/user.entity';
export interface AuthRepositoryInterface {
  signUpUser(user: User): Promise<Omit<User, 'password'>>;
}
