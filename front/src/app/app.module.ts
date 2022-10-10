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
import { RoomsFilterPipePipe } from './pipes/rooms/rooms-filter-pipe.pipe';
import { UsersFilterPipePipe } from './pipes/users/users-filter-pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';

// import and register filepond file type validation plugin
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

// Import the plugin code
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Import the plugin code
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';

// Import the plugin code
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';


// // Import the plugin styles
// import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';
// // Import the plugin styles
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Registering plugins
registerPlugin(FilePondPluginFileValidateType);
registerPlugin(FilePondPluginImagePreview);
registerPlugin(FilePondPluginFilePoster);
registerPlugin(FilePondPluginFileEncode);

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    AddUserComponent,
      AddRoomComponent,
      ListRoomsComponent,
      UpdateRoomComponent,
      RoomsFilterPipePipe,
    UsersFilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FilePondModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
