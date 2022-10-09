import { Component, OnInit , ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RoomService} from '../../services/room.service';
import { defaultsDeep } from 'lodash';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {


  constructor(private roomService: RoomService, private router: Router) { }

  @ViewChild('myPond') myPond: any;


  pondOptions = {

    multiple: false,
    allowImagePreview: true,
    allowFilePoster:true,
    allowFileEncode: true,
    allowDrop:true,
    labelIdle: 'Téléverser la photo',
    acceptedFileTypes:  'image/*' ,
    credits: false
  };



  ngOnInit() {
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const room = defaultsDeep({
      id: null,
      nom: ngForm.form.value.nom,
      equipements: ngForm.form.value.equipements,
      capacite: ngForm.form.value.capacite,
    });

    this.roomService.addRoom(room).subscribe(room => console.log(room));

    this.router.navigateByUrl('');
  }



  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log('Filename' + event.file.filename);
    console.log('A file was added', event);
  }

}
