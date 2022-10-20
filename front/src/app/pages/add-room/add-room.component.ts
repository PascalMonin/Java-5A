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

  file : File;

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

    const room = defaultsDeep({
      id: null,
      nom: ngForm.form.value.nom,
      equipements: ngForm.form.value.equipements,
      capacite: ngForm.form.value.capacite,
    });

     this.roomService.uploadImage(this.file).subscribe((file_name)=>{
       room.photo=file_name
       this.roomService.addRoom(room).subscribe(room => console.log(room))
    });
    this.router.navigateByUrl('');
  }



  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    this.file =event.file.file
    console.log('Filename' + this.file);
    console.log('A file was added', event);
  }



}
