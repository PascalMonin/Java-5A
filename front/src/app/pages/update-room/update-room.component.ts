import { Component, OnInit } from '@angular/core';
import {RoomService} from '../../services/room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Room} from '../../models/room.model';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
   id: number;
   room =  new Room();
  constructor(private  roomService : RoomService, private route :ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.room = this.roomService.getRoomById(this.id).subscribe(room => this.room = room )
  }

  updateRoom(){
    this.roomService.updateRoom(this.room).subscribe(room =>console.log(room));
    this.router.navigateByUrl('/rooms');
  }

}
