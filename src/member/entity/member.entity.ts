import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('member')
export class Member {
  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP()' })
  createdAt: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP()' })
  updatedAt: Date;

  @Column({ type: 'boolean', default: false })
  deleted: boolean;

  static from(id: string, email: string, password: string): Member {
    const member = new Member();
    member.id = id;
    member.email = email;
    member.password = password;
    return member;
  }
}
