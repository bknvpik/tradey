import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserDetails {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  firstName: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  lastName: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  country: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  city: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  zipCode: string;

  @Column({ type: "varchar", length: 200, nullable: true })
  address1: string;
  
  @Column({ type: "varchar", length: 200, nullable: true })
  address2: string;

  @Column({ type: "int", default: 0 })
  rating: number;

  @Column({ type: "varchar", length: 255, default: "default-user-img.png" })
  image: string;

  @OneToOne( type => User, { cascade: true })
  @JoinColumn()
  user: User;
}