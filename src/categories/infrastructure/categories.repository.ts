import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubCategory } from 'src/subcategories/domain/subcategory.entity';
import { Repository } from 'typeorm';
import { Category } from '../domain/category.entity';
import { CategoryRepositoryInterface } from '../domain/category.repository.interface';
import { CategoryScheme } from './category.scheme';

@Injectable()
export class CategoryRepository implements CategoryRepositoryInterface {
  constructor(
    @InjectRepository(CategoryScheme)
    private readonly ormRepo: Repository<CategoryScheme>,
  ) {}

  async getListCategories(): Promise<Category[]> {
    const categoriesEntity = await this.ormRepo.find({
      relations: ['subcategories'],
    });
    return categoriesEntity.map((category) => Category.create(category));
  }

  async getCategory(id: number): Promise<Category> {
    const categoryEntity = await this.ormRepo.findOne({
      where: { id },
      relations: ['subcategories'],
    });
    return !categoryEntity ? null : Category.create(categoryEntity);
  }

  saveCategory(category: Category): Promise<Category> {
    return this.ormRepo.save(category);
  }

  async updateCategory(id: number, category: Category): Promise<void> {
    await this.ormRepo.update(
      {
        id,
      },
      category,
    );
  }

  async deleteCategory(id: number): Promise<void> {
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
