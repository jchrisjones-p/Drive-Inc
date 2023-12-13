import { Controller, Get } from '@nestjs/common';
import { Vehicles } from './vehicles.entity';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  findAllReservations(): Promise<Vehicles[]> {
    return this.vehiclesService.findAll();
  }
}
