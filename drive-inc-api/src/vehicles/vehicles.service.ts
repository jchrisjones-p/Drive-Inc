import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicles } from './vehicles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicles)
    private readonly vehicleRepository: Repository<Vehicles>,
  ) {}

  findAll(): Promise<Vehicles[]> {
    return this.vehicleRepository.find();
  }
}
