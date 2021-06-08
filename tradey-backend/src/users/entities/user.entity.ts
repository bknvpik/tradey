import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Item } from 'src/items/entities/item.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 200, unique: true })
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