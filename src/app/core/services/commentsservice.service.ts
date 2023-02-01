import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { environment as env } from '../../../environments/environment';
const BASE_URL_WEBAPI = env.webApiBaseUri;
const commentRoutes = {
  comments: '/comments',
}
@Injectable({
  providedIn: 'root'
})
export class CommentsserviceService {
  constructor(private webApiService: WebApiService) { }


  getComments(): Observable<any> {
    return this.webApiService.get(commentRoutes.comments);
  }

}