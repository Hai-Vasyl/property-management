import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from 'src/common/entities/base.entity';
import { ApartmentEntity } from 'src/apartments/entities/apartment.entity';

@Entity({ name: 'house' })
export class HouseEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 150, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 150, nullable: false })
  address: string;

  @OneToMany(() => ApartmentEntity, (apartment) => apartment.house)
  apartments: ApartmentEntity[];
}
