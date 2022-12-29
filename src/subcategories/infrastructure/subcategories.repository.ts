import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCategory } from '../domain/subcategory.entity';
import { SubCategoryRepositoryInterface } from '../domain/subcategory.repository.interface';
import { SubCategoryScheme } from './subcategory.scheme';

@Injectable()
export class SubCategoryRepository implements SubCategoryRepositoryInterface {
  constructor(
    @InjectRepository(SubCategoryScheme)
    private readonly ormRepo: Repository<SubCategoryScheme>,
  ) {}

  async getListCategories(): Promise<SubCategory[]> {
    const categoriesEntity = await this.ormRepo.find();
    return categoriesEntity.map((subcategory) =>
      SubCategory.create(subcategory),
    );
  }

  async getSubCategory(id: number): Promise<SubCategory> {
    const subcategoryEntity = await this.ormRepo.findOneBy({ id });
    return !subcategoryEntity ? null : SubCategory.create(subcategoryEntity);
  }

  saveSubCategory(subcategory: SubCategory): Promise<SubCategory> {
    return this.ormRepo.save(subcategory);
  }

  async updateSubCategory(id: number, subcategory: SubCategory): Promise<void> {
    await this.ormRepo.update(
      {
        id,
      },
      subcategory,
    );
  }

  async deleteSubCategory(id: number): Promise<void> {
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
