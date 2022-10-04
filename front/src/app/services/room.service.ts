import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import { defaultsDeep } from 'lodash';
import {Room} from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  listRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.url}/rooms`).pipe(timeout(10000));
  }

}
