import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Item } from 'src/items/entities/item.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 200 })
  firstName: string;

  @Column({ type: "varchar", length: 200 })
  lastName: string;

  @Column({ type: "varchar", length: 200 })
  email: string;

  @Column({ type: "varchar", length: 255 })
  password: string;
  
  @Column({ type: "timestamp" })
  createdAt: string;

  @Column({ type: "bool", default: false })
  isActive: boolean;

  @OneToMany( type => Item, item => item.user )
  items: Item[]
}