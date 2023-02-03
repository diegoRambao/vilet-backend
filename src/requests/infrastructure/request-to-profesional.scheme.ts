import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { UserScheme } from 'src/users/infrastructure/user.scheme';
import { User } from 'src/users/domain/user.entity';
import { RequestScheme } from './requests.scheme';

@Entity({
  name: 'requestToProfesional',
})
export class RequestToProfesionalScheme {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column()
  public professionalId!: number;

  @Column()
  public requestId!: number;

  @Column()
  public status!: number;

  @ManyToOne(() => UserScheme, (profesional) => profesional.requestToPesionals)
  public professional!: User;

  @ManyToOne(() => RequestScheme, (request) => request.professionals)
  public request!: Request;
}
