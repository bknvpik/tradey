import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 200 })
  role: string;
}