import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {AuthService} from '../../auth/service/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {ReservationService} from '../../services/reservation.service';
import {Reservation} from '../../models/reservation.model';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css']
})
export class ListReservationsComponent implements OnInit {

  reservations: Reservation[];

  constructor(private reservationService: ReservationService) {

  }

  ngOnInit() {
    this.reservationService.listReservations().subscribe(reservations => this.reservations = reservations);
  }

}
