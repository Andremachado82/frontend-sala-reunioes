import { CreateRoomComponent } from './components/create-room/create-room.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomListComponent } from './components/room-list/room-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
