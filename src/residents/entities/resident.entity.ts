import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

import { BaseEntity } from 'src/common/entities/base.entity';
import { ApartmentEntity } from 'src/apartments/entities/apartment.entity';
import { GenderEnum } from '../enums/gender';

@Entity({ name: 'resident' })
export class ResidentEntity extends BaseEntity {
  @Column({ name: 'first_name', type: 'varchar', length: 50, nullable: false })
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar', length: 50, nullable: false })
  lastName: string;

  @Column({ type: 'enum', enum: GenderEnum, nullable: false })
  gender: GenderEnum;

  @OneToOne(() => ApartmentEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'apartment_id' })
  apartment: ApartmentEntity;
}