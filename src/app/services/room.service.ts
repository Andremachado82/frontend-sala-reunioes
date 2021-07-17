import { Room } from './../models/room';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  url = "http://localhost:8082/room";

  constructor(
    private http: HttpClient
  ) { }

  getRoomsList(): Observable<any> {
    return this.http.get<Room[]>(`${this.url}/list`);
  }

  deleteRoomById(id: number) {
    return this.http.delete(`${this.url}/` + id)
  }
}
