import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  location: string;

  @Column()
  availableFromTime: string;

  @Column()
  availableToTime: string;

  @Column()
  availableDays: string;

  @Column()
  minimumMinutesBetweenBookings: number;
}
