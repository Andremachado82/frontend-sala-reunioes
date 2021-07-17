import { Room } from './../../models/room';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  rooms;

  constructor() { }

  ngOnInit(): void {
  }

  roomDetails(id) {}

  updateRoom(id) {}

  deleteRoom(id){}

}
