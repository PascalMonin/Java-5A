import { defaultsDeep } from 'lodash';

export class Room {
  id: number;
  nom: string;
  capacite: number;
  equipements: string;
  photo: string;

  constructor(room?: Partial<Room>) {
    defaultsDeep(this, room);
  }
}