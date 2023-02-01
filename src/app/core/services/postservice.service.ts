import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { environment as env } from '../../../environments/environment';

const BASE_URL_WEBAPI = env.webApiBaseUri;
const postRoutes = {
  posts: '/posts',
  getPostById:(id:string)=>`/posts/${id}/comments`
}
@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  constructor(private webApiService: WebApiService) { }
  getPosts(): Observable<any> {
    return this.webApiService.get(postRoutes.posts);
  }
  getByPosts(id:string): Observable<any> {
    return this.webApiService.get(postRoutes.getPostById(id));
  }
}
