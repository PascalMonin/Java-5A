import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {AuthService} from '../../auth/service/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {RoomService} from '../../services/room.service';
import {Room} from '../../models/room.model';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {

  rooms: Room[];

  constructor(private roomService: RoomService) {

  }

  ngOnInit() {
    this.roomService.listRooms().subscribe(rooms => this.rooms = rooms);
  }

}
