import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class ItemImages {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 255 })
  image: string;

  @ManyToOne( type => Item, item => item.images )
  item: Item;
}