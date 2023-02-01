import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL_WEBAPI = env.webApiBaseUri;

@Injectable()
export class WebApiService {
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json'), withCredentials: false };

  constructor(private httpClient: HttpClient) { }

  public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(BASE_URL_WEBAPI + path, { params }).pipe(catchError(this.formatErrors));
  }

  public put(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .put(BASE_URL_WEBAPI + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.httpClient
      .post(BASE_URL_WEBAPI + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

 

  public postWithCookies(path: string, body: object = {}): Observable<any> {
    this.options.withCredentials = true;
    return this.httpClient
      .post(BASE_URL_WEBAPI + path, JSON.stringify(body), this.options)
      .pipe(catchError(this.formatErrors));
  }

  public delete(path: string): Observable<any> {
    return this.httpClient.delete(BASE_URL_WEBAPI + path).pipe(catchError(this.formatErrors));
  }
  public Options(path: string): Observable<any> {
    return this.httpClient.options(BASE_URL_WEBAPI + path).pipe(catchError(this.formatErrors));
  }
  public formatErrors(error: any): Observable<any> {
    return throwError(error.error);
  }
  public numberToObjectBody(numberValue: number): object {
    return { value : numberValue };
  }
}
