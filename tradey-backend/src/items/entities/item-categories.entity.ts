import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ItemCategories {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 200 })
  category: string;
}