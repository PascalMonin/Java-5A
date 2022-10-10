import { Component, OnInit , ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RoomService} from '../../services/room.service';
import { defaultsDeep } from 'lodash';
import {ActivatedRoute, Router} from '@angular/router';
import {ReservationService} from '../../services/reservation.service';
import {Room} from '../../models/room.model';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  roomId: number;
  room =  new Room();
  users: User[];

  constructor(
      private reservationService: ReservationService,
      private roomService: RoomService,
      private userService: UserService,
      private route: ActivatedRoute,
      private router: Router) {}

  ngOnInit() {
    this.roomId = this.route.snapshot.params.id;
    this.roomService.getRoomById(this.roomId).subscribe(room => this.room = room )
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const reservation = defaultsDeep({
      id: null,
      roomId: this.roomId,
      hostId: ngForm.form.value.hostId,
      attendees: ngForm.form.value.attendees,
      startDate: ngForm.form.value.startDate,
      endDate: ngForm.form.value.endDate
    });

    this.reservationService.addReservation(reservation).subscribe(reservation => console.log(reservation));

    this.router.navigateByUrl('');
  }
}