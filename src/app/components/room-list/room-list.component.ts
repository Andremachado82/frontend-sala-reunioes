import { RoomService } from './../../services/room.service';
import { Room } from './../../models/room';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  rooms: Room[];

  constructor(
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.roomService.getRoomsList()
      .subscribe((response: Room[]) => {
        this.rooms = response;

      })
  }

  roomDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateRoom(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteRoom(id: number){
    this.roomService.deleteRoomById(id)
    .subscribe(response => {
      this.reloadData();
    })
  }


}
