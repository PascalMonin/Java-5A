import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddUserComponent} from './pages/add-user/add-user.component';
import {ListRoomsComponent} from './pages/list-rooms/list-rooms.component';
import {AddRoomComponent} from './pages/add-room/add-room.component';
import {UpdateRoomComponent} from './pages/update-room/update-room.component';
import {ListUsersComponent} from './pages/list-users/list-users.component';
import {UpdateUserComponent} from './pages/update-user/update-user.component';
import {AddReservationComponent} from './pages/add-reservation/add-reservation.component';


const routes: Routes = [
  { path: 'users/add', component: AddUserComponent },
  { path: '', component: ListRoomsComponent},
  { path: 'users', component: ListUsersComponent},
  { path: 'users/update/:id', component: UpdateUserComponent},
  { path: 'reservations/add/:id', component: AddReservationComponent},
  { path: 'rooms/add', component: AddRoomComponent},
  { path: 'rooms/update/:id', component: UpdateRoomComponent},
  { path: 'rooms/delete/:id', component:  ListRoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
