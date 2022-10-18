import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column('decimal')
  amount: number;
}
