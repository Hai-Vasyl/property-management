import { Column, Entity, JoinTable, ManyToOne } from 'typeorm';

import { BaseEntity } from 'src/common/entities/base.entity';
import { HouseEntity } from 'src/house/entities/house.entity';

@Entity({ name: 'apartment' })
export class ApartmentEntity extends BaseEntity {
  @Column({ type: 'int', nullable: false })
  number: number;

  @Column({ type: 'int', nullable: false })
  floor: number;

  @ManyToOne(() => HouseEntity, (house) => house.apartments, {
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'house_id' })
  house: HouseEntity;
}
