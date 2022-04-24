import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  server : string = "https://fakestoreapi.com/users";

  constructor(private _http:HttpClient) { }

  getAllUsers(){
    return this._http.get(this.server);
  }

  getUser(id:number){
    return this._http.get(`${this.server}/${id}`)
  }
}
