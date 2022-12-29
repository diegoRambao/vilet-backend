import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { SubCategoryScheme } from 'src/subcategories/infrastructure/subcategory.scheme';
import { UserScheme } from 'src/users/infrastructure/user.scheme';
import { SubCategory } from 'src/subcategories/domain/subcategory.entity';
import { User } from 'src/users/domain/user.entity';

@Entity({
  name: 'categories',
})
export class CategoryScheme {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 255 })
  name: string;

  @OneToMany(() => SubCategoryScheme, (subcategory) => subcategory.category, {
    nullable: true,
  })
  subcategories?: SubCategory[] | null;

  @OneToMany(() => UserScheme, (user) => user.category, { nullable: true })
  users?: User[] | null;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
