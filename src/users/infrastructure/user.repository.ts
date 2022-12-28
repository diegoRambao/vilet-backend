import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/domain/category.entity';
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

  async validateUserExists({ email }: User): Promise<boolean> {
    const userSearched = await this.getUserByEmail(email);
    return !!userSearched;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const userEntity = await this.ormRepo.findOne({
      where: { email },
      relations: ['category'],
    });
    const categoryEntity =
      userEntity?.category && Category.create(userEntity?.category);
    return userEntity
      ? User.create({ ...userEntity, category: categoryEntity })
      : null;
  }

  async getListUsers(): Promise<User[]> {
    const usersEntity = await this.ormRepo.find({ relations: ['category'] });
    return usersEntity.map((user) => {
      const categoryEntity = user?.category && Category.create(user?.category);
      return User.create({ ...user, category: categoryEntity });
    });
  }

  async getUser(id: number): Promise<User> {
    const userEntity = await this.ormRepo.findOne({
      where: { id },
      relations: ['category'],
    });
    if (!userEntity) {
      throw new NotFoundException();
    }
    const categoryEntity =
      userEntity?.category && Category.create(userEntity.category);
    return User.create({ ...userEntity, category: categoryEntity });
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
