import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../domain/user.entity';
import { UserRepositoryInterface } from '../domain/user.repository.interface';
import { UserScheme } from './user.scheme';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectRepository(UserScheme)
    private readonly ormRepo: Repository<UserScheme>,
  ) {}

  async getUserByEmail(email: string): Promise<User> {
    const userEntity = await this.ormRepo.findOneBy({ email });
    if (!userEntity) {
      throw new NotFoundException();
    }
    return User.create(userEntity);
  }

  async getListUsers(): Promise<User[]> {
    const usersEntity = await this.ormRepo.find();
    return usersEntity.map((user) => User.create(user));
  }

  async getUser(id: number): Promise<User> {
    const userEntity = await this.ormRepo.findOneBy({ id });
    if (!userEntity) {
      throw new NotFoundException();
    }
    return User.create(userEntity);
  }

  saveUser(user: User): Promise<User> {
    return this.ormRepo.save(user);
  }

  async updateUser(id: number, user: User): Promise<void> {
    await this.ormRepo.update(
      {
        id,
      },
      user,
    );
  }

  async deleteUser(id: number): Promise<void> {
    await this.ormRepo.update(
      {
        id,
      },
      {
        deleteAt: new Date(),
      },
    );
  }
}
