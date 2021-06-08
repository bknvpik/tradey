import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Item } from 'src/items/entities/item.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 200, default: "pending" })
  status: string;

  @Column({ type: "timestamp" })
  createdAt: string;

  @ManyToOne( type => Item, item => item.offers )
  item: Item;

  @ManyToOne( type => Item, item => item.offersTo )
  itemOffered: Item;
}