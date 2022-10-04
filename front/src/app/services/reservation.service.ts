import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {timeout} from 'rxjs/operators';
import { defaultsDeep } from 'lodash';
import {Reservation} from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  listReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.url}/reservations`).pipe(timeout(10000));
  }

}
