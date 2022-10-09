import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AddRoomComponent} from './pages/add-room/add-room.component';
import {ListRoomsComponent} from './pages/list-rooms/list-rooms.component';
import { UpdateRoomComponent } from './pages/update-room/update-room.component';
import { RoomsFilterPipePipe } from './pipes/rooms-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddUserComponent,
      AddRoomComponent,
      ListRoomsComponent,
      UpdateRoomComponent,
      RoomsFilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
