import { defaultsDeep } from 'lodash';

export class Reservation {
  id: number;
  roomId: number;
  roomName: number;
  hostId: number;
  hostName: string;
  attendees: string;
  startDate: string;
  endDate: string;

  constructor(reservation?: Partial<Reservation>) {
    defaultsDeep(this, reservation);
  }
}