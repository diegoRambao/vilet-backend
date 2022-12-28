import { CategoryScheme } from 'src/categories/infrastructure/category.scheme';
import { UserType } from 'src/shared/types/type.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity({
  name: 'users',
})
export class UserScheme {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column('varchar', { length: 255 })
  email: string;

  @Column('varchar', { length: 255 })
  password: string;

  @Column('varchar', { length: 255 })
  name: string;

  @Column('varchar', { length: 255, nullable: true })
  lastName: string;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.client,
  })
  type: UserType;

  // @Column('varchar', { length: 255, nullable: true })
  // categoryId?: number;

  @Column('text', { nullable: true })
  description?: string;

  @Column('varchar', { nullable: true })
  location?: string | number;

  @ManyToOne(() => CategoryScheme, (category) => category.users, {
    nullable: true,
  })
  category?: CategoryScheme | null;

  @CreateDateColumn()
  createAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;

  @DeleteDateColumn()
  deleteAt?: Date;
}
