import { Injectable } from '@angular/core';
import {Reservation} from '../models/reservation.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import { defaultsDeep } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.url}/reservations`).pipe(timeout(10000));
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<any>(`${this.url}/reservations/add`, reservation).pipe(timeout(10000));
  }

  deleteReservation(id: number): Observable<any> {
    return this.http.delete(`${this.url}/reservations/${id}`).pipe(timeout(10000));
  }

  getReservationById(id: number): Observable<Reservation>{
    return this.http.get<Reservation>(`${this.url}/reservations/update/${id}`).pipe(timeout(10000))
  }

  updateReservation(reservation : Reservation): Observable<any> {
    return this.http.post(`${this.url}/reservations/update`,reservation).pipe(timeout(10000));
  }
}
