import { Controller, Post, Body } from '@nestjs/common';
import { ElevatorService } from './elevator.service';

@Controller('api/v1/elevator')
export class ElevatorController {
  constructor(private readonly elevatorService: ElevatorService) {}

  @Post('call')
  callElevator(@Body('floor') floor: number) {
    return this.elevatorService.callElevator(floor);
  }

  @Post('open-doors')
  openDoors() {
    return this.elevatorService.openDoors();
  }

  @Post('close-doors')
  closeDoors() {
    return this.elevatorService.closeDoors();
  }

  @Post('move')
  moveElevator() {
    return this.elevatorService.moveElevator();
  }
}
