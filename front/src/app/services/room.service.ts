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

  getRoomById(id: number): Observable<Room>{
    return this.http.get<Room>(`${this.url}/rooms/update/${id}`).pipe(timeout(10000))
  }

  updateRoom(room : Room): Observable<any> {
    return this.http.post(`${this.url}/rooms/update`,room).pipe(timeout(10000));
  }

  addRoom(room: Room, ): Observable<Room> {
    return this.http.post<any>(`${this.url}/rooms/add`, room).pipe(timeout(10000));
  }

  uploadImage(file: File): Observable<any>
  {
    const formData = new FormData()
    formData.append('file',file)
    return this.http.post<any>(`${this.url}/rooms/upload`, formData).pipe(timeout(10000));
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.url}/rooms/delete/${id}`).pipe(timeout(10000));
  }


}
