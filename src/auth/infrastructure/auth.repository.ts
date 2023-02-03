import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

import { AuthRepositoryInterface } from '../domain/auth.repository.interface';
import { User } from 'src/users/domain/user.entity';
import { UserScheme } from 'src/users/infrastructure/user.scheme';

@Injectable()
export class AuthRepository implements AuthRepositoryInterface {
  constructor(
    @InjectRepository(UserScheme)
    private readonly ormRepo: Repository<UserScheme>,
  ) {}

  async signUpUser(user: User): Promise<User> {
    const userEntity = await this.ormRepo.save(user);
    return User.create(userEntity);
  }
}
