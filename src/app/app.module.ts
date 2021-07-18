import { UpdateRoomComponent } from './components/update-room/update-room.component';
import { AppRoutingModule } from './app-routing.module';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    RoomListComponent,
    RoomDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID,      useValue: 'pt-BR'}  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
