import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserDetails {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 200 })
  country: string;

  @Column({ type: "varchar", length: 200 })
  zipCode: string;

  @Column({ type: "varchar", length: 200 })
  address1: string;
  
  @Column({ type: "varchar", length: 200 })
  address2: string;

  @Column({ type: "int", default: 0 })
  rating: number;

  @Column({ type: "varchar", length: 255 })
  profileImage: string;

  @OneToOne( type => User )
  @JoinColumn()
  user: User;
}