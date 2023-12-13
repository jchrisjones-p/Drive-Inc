import { Controller, Get } from '@nestjs/common';

@Controller('reservations')
export class ReservationsController {
  @Get()
  findAllReservations() {
    return 'All reservations';
  }
}
