import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListBooksComponent} from './pages/list-books/list-books.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {ListBooksAdminComponent} from './pages/list-books-admin/list-books-admin.component';
import {AuthGuard} from './auth/service/guards/auth.guard';
import {ListRoomsComponent} from './pages/list-rooms/list-rooms.component';
import {ListReservationsComponent} from './pages/list-reservations/list-reservations.component';


const routes: Routes = [
  { path: '', component: ListBooksComponent },
  { path: 'rooms', component: ListRoomsComponent },
  { path: 'reservations', component: ListReservationsComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'dashboard', component: ListBooksAdminComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
