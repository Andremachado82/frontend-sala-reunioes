import { Room } from './../../models/room';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  room: Room = new Room();
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  newRoom() {}

  onSubmit(){}

}
