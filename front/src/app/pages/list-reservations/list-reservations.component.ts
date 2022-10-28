import {Component, OnDestroy, OnInit} from '@angular/core';

import {ReservationService} from '../../services/reservation.service';
import {Router} from '@angular/router';
import {Reservation} from '../../models/reservation.model';
import {RoomService} from '../../services/room.service';
import {UserService} from '../../services/user.service';
import {Room} from '../../models/room.model';

@Component({
  selector: 'app-list-reservations',
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.css']
})
export class ListReservationsComponent implements OnInit {

  reservations: Reservation[];
  searchText : string


  constructor(
      private reservationService: ReservationService,
      private router: Router) {

  }

  ngOnInit() {
    this.reservationService.getReservations().subscribe(reservations => this.reservations = reservations);
  }

  deleteReservation(id: number)
  {
    this.reservationService.deleteReservation(id).subscribe(succes => {
      this.reservations = this.reservations.filter(reservation => reservation.id !== id)
    })

    this.router.navigateByUrl('')
  }

}
