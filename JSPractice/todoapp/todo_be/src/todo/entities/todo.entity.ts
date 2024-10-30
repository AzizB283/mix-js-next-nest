import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column()
  completed: boolean;

  // Many todos can be belongs to one user
  // Many to one relationship
  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
