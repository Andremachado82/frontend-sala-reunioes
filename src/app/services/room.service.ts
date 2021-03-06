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

  createRoom(room: Object) {
    return this.http.post(`${this.url}`, room);
  }

  getRoom(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  getRoomsList(): Observable<any> {
    return this.http.get<Room[]>(`${this.url}/list`);
  }

  updateRoom(id: number, room: Room) {
    return this.http.put(`${this.url}/${id}`, room);
  }

  deleteRoomById(id: number) {
    return this.http.delete(`${this.url}/` + id)
  }
}
