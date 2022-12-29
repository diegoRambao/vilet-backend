import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { CategoryScheme } from 'src/categories/infrastructure/category.scheme';

@Entity({
  name: 'subcategories',
})
export class SubCategoryScheme {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @ManyToOne(() => CategoryScheme, (category) => category.subcategories)
  category: CategoryScheme;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
