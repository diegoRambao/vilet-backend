import { Category } from 'src/categories/domain/category.entity';
import { CategoryScheme } from 'src/categories/infrastructure/category.scheme';
import { Request } from 'src/requests/domain/request.entity';
import { RequestToProfesionalScheme } from 'src/requests/infrastructure/request-to-profesional.scheme';
import { RequestScheme } from 'src/requests/infrastructure/requests.scheme';
import { UserType } from 'src/shared/types/type.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
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

  @Column('varchar', { length: 255 })
  phone: string;

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

  @Column('varchar', { nullable: true })
  country?: string;

  @Column('integer', { nullable: true })
  latitude?: number;

  @Column('integer', { nullable: true })
  longitude?: number;

  @Column('varchar', { nullable: true })
  place?: string;

  @Column('varchar', { nullable: true })
  placName?: string;

  @Column('varchar', { nullable: true })
  region?: string;

  @ManyToOne(() => CategoryScheme, (category) => category.users, {
    nullable: true,
  })
  category?: Category | null;

  @OneToMany(() => RequestScheme, (request) => request.client, {
    nullable: true,
  })
  requests?: Request[] | null;

  @OneToMany(
    () => RequestToProfesionalScheme,
    (postToCategory) => postToCategory.professional,
  )
  public requestToPesionals!: RequestToProfesionalScheme[];

  @CreateDateColumn()
  createAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;

  @DeleteDateColumn()
  deleteAt?: Date;
}
