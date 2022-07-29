import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/domain/user.entity';
import { UserScheme } from 'src/users/infrastructure/user.scheme';
import { Repository } from 'typeorm/repository/Repository';
import { AuthRepositoryInterface } from '../domain/auth.repository.interface';

@Injectable()
export class AuthRepository implements AuthRepositoryInterface {
  constructor(
    @InjectRepository(UserScheme)
    private readonly ormRepo: Repository<UserScheme>,
  ) {}

  async signUpUser(user: User): Promise<Omit<User, 'password'>> {
    const userEntity = await this.ormRepo.save(user);
    delete userEntity.password;
    return User.create(userEntity);
  }
}
