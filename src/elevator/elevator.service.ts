import { Injectable } from '@nestjs/common';

@Injectable()
export class ElevatorService {
  private currentFloor: number = 0;
  private requests: number[] = [];

  callElevator(floor: number) {
    if (!this.requests.includes(floor)) {
      this.requests.push(floor);
    }
    this.requests.sort((a, b) => a - b);
    return this.requests;
  }

  openDoors() {
    return 'Doors opened';
  }

  closeDoors() {
    return 'Doors closed';
  }

  moveElevator() {
    if (this.requests.length > 0) {
      this.currentFloor = this.requests.shift();
      return `Elevator moving to floor ${this.currentFloor}`;
    }
    return 'No requests';
  }
}
