import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ItemSizes {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 200 })
  size: string;
}