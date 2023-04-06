import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity as Base,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class BaseEntity extends Base {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
