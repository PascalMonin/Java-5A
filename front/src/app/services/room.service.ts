import { Injectable } from '@angular/core';
import {Room} from '../models/room.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.url}/rooms`).pipe(timeout(10000));
  }

  addRoom(room: Room): Observable<Room> {
    return this.http.post<any>(`${this.url}/rooms/add`, room).pipe(timeout(10000));
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.url}/rooms/${id}`).pipe(timeout(10000));
  }

}
