import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { environment as env } from '../../../environments/environment';
const BASE_URL_WEBAPI = env.webApiBaseUri;
const photoRoutes = {
  photos: '/photos',
}
@Injectable({
  providedIn: 'root'
})

export class PhotosserviceService {

  constructor(private webApiService: WebApiService) { }


  getPhotos(): Observable<any> {
    return this.webApiService.get(photoRoutes.photos);
  }
}
