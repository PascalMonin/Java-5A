import {Component, OnDestroy, OnInit} from '@angular/core';

import {RoomService} from '../../services/room.service';
import {Room} from '../../models/room.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {

  rooms: Room[];

  constructor(private roomService: RoomService, private router :Router) {

  }

  ngOnInit() {
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms);
  }

  deleteRoom(id: number)
  {
    this.roomService.deleteRoom(id).subscribe(succes => {
      this.rooms = this.rooms.filter(room => room.id !== id)
    })

    this.router.navigateByUrl('')
  }

}
