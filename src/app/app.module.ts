import { AppRoutingModule } from './app-routing.module';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    RoomListComponent,
    RoomDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
