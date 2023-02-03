import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { RequestScheme } from 'src/requests/infrastructure/requests.scheme';
import { SubCategory } from 'src/subcategories/domain/subcategory.entity';
import { SubCategoryScheme } from 'src/subcategories/infrastructure/subcategory.scheme';
import { User } from 'src/users/domain/user.entity';
import { UserScheme } from 'src/users/infrastructure/user.scheme';

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

  @Column('varchar', { length: 255 })
  icon: string;

  @OneToMany(() => UserScheme, (user) => user.category, { nullable: true })
  users?: User[] | null;

  @OneToMany(() => RequestScheme, (request) => request.category, {
    nullable: true,
  })
  requests?: RequestScheme[] | null;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
