import { Offer } from 'src/offers/entities/offer.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ItemCategories } from './item-categories.entity';
import { ItemConditions } from './item-conditions.entity';
import { ItemImages } from './item-images.entity';
import { ItemSizes } from './item-sizes.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 200 })
  name: string;

  @Column({ type: "varchar", length: 255 })
  description: string;

  @Column({ type: "int" })
  value: number;
  
  @Column({ type: "timestamp" })
  createdAt: string;

  @Column({ type: "bool", default: true })
  available: boolean;

  @OneToOne( type => ItemCategories )
  @JoinColumn()
  category: ItemCategories;

  @OneToOne( type => ItemConditions )
  @JoinColumn()
  condition: ItemConditions;

  @OneToOne( type => ItemSizes )
  @JoinColumn()
  size: ItemSizes;

  @OneToMany( type => ItemImages, itemImages => itemImages.item )
  images: ItemImages[];

  @ManyToOne( type => User, user => user.items )
  user: User;

  @OneToMany( type => Offer, offer => offer.item )
  offers: Offer[];

  @OneToMany( type => Offer, offer => offer.itemOffered )
  offersTo: Offer[];
}