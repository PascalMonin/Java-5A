import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
   id: number;
   user =  new User();
  constructor(private  userService : UserService, private route :ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService.getUserById(this.id).subscribe(user => this.user = user )
  }

  updateUser(){
    this.userService.updateUser(this.user).subscribe(user =>console.log(user));
    this.router.navigateByUrl('/users');
  }

}
