import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column("text")
  description: string;

  @Column("text")
  email: string;

  @Column("text")
  phone: string;
}
