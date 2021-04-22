import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class ItemConditions {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 200 })
  condition: string;

  @OneToMany( type => Item, item => item.condition )
  items: Item[]
}