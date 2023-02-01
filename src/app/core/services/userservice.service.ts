import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {WebApiService} from '../services/web-api.service'
import { environment as env } from '../../../environments/environment';
import { Observable } from 'rxjs';
const BASE_URL_WEBAPI = env.webApiBaseUri;
const userRoutes = {
  users: '/users',
  getuserById:(id:string)=>`/users/${id}`
}
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private webApiService: WebApiService) { }


  getUsers(): Observable<any> {
    return this.webApiService.get(userRoutes.users);
  }
  getUserById(id:string):Observable<any>{
    return this.webApiService.get(userRoutes.getuserById(id));
  }

}
