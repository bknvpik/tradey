import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Role } from './role.entity';

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne( type => User )
  @JoinColumn()
  user: User;

  @OneToOne( type => Role )
  @JoinColumn()
  role: Role;
}