import {Component, OnDestroy, OnInit} from '@angular/core';

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
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms);
  }

}
