import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { UserScheme } from 'src/users/infrastructure/user.scheme';
import { User } from 'src/users/domain/user.entity';
import { CategoryScheme } from 'src/categories/infrastructure/category.scheme';
import { Category } from 'src/categories/domain/category.entity';
import { RequestToProfesionalScheme } from './request-to-profesional.scheme';
import { ProfesionalWithStatus } from '../domain/request.entity';

@Entity({
  name: 'requests',
})
export class RequestScheme {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @ManyToOne(() => CategoryScheme, (category) => category.requests)
  category: Category | null;

  @ManyToOne(() => UserScheme, (client) => client.requests)
  @JoinColumn()
  client: User | null;

  @OneToMany(
    () => RequestToProfesionalScheme,
    (postToCategory) => postToCategory.request,
  )
  public professionals!: ProfesionalWithStatus[];

  @Column('text', { nullable: true })
  description?: string;

  @Column('integer', { nullable: true })
  latitude?: number;

  @Column('integer', { nullable: true })
  longitude?: number;

  @Column('varchar', { nullable: true })
  placeName?: string;

  @Column('char', { nullable: true })
  state?: 'A' | 'C';

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
