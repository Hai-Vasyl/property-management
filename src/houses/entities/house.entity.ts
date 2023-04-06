import { Column, Entity, OneToMany } from 'typeorm';

import { ApartmentEntity } from '../../apartments/entities/apartment.entity';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity({ name: 'house' })
export class HouseEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 150, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  address: string;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.house)
  apartments: ApartmentEntity[];
}
