import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn()
  userid: string;

  @Column()
  username: string;

  @Column()
  passhash: string;
}
