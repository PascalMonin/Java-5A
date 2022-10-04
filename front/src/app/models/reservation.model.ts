import { defaultsDeep } from 'lodash';

export class Reservation {
  id: number;
  hoteId: number;
  listInvites: string;
  dateDebut: string;
  dateFin: string;

  constructor(reservation?: Partial<Reservation>) {
    defaultsDeep(this, reservation);
  }
}