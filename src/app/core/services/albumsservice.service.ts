import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { environment as env } from '../../../environments/environment';
const BASE_URL_WEBAPI = env.webApiBaseUri;
const albumRoutes = {
  albums: '/albums',
}
@Injectable({
  providedIn: 'root'
})
export class AlbumsserviceService {
  constructor(private webApiService: WebApiService) { }


  getAlbums(): Observable<any> {
    return this.webApiService.get(albumRoutes.albums);
  }
}
