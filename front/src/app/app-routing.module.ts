import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from './pages/list-users/list-users.component';
import {AddUserComponent} from './pages/add-user/add-user.component';
import {ListRoomsComponent} from './pages/list-rooms/list-rooms.component';
import {AddRoomComponent} from './pages/add-room/add-room.component';
import {UpdateRoomComponent} from './pages/update-room/update-room.component';


const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: '', component: ListRoomsComponent},
  { path: 'rooms/add', component: AddRoomComponent},
  { path: 'rooms/update/:id', component: UpdateRoomComponent},
  { path: 'rooms/delete/:id', component:  ListRoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
