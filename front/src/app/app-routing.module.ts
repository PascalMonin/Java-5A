import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './pages/list-users/list-users.component';
import {AddUserComponent} from './pages/add-user/add-user.component';
import {ListRoomsComponent} from './pages/list-rooms/list-rooms.component';
import {AddRoomComponent} from './pages/add-room/add-room.component';


const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: 'list', component: ListUsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'rooms', component:ListRoomsComponent},
  { path: 'rooms/add', component: AddRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
