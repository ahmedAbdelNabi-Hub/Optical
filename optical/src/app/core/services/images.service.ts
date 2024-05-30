import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
    })
  };
  constructor(private _HttpClient: HttpClient, private route: ActivatedRoute) { }
  gettestImage(page: string): Observable<any> {
    return this._HttpClient.get(`https://api.unsplash.com/photos?page=${page}&client_id=9m5Etw8AI1no-i5EUQqpWnc7SpOigq34Q8lnJaYZZvo`, this.httpOptions);
  }

  getTopic(topic: string): Observable<any> {
    return this._HttpClient.get(`https://api.unsplash.com/topics/${topic}?client_id=9m5Etw8AI1no-i5EUQqpWnc7SpOigq34Q8lnJaYZZvo`, this.httpOptions)
  }

  getphoto(page: string, topic: string): Observable<any> {
    if (topic != '') {
      return this._HttpClient.get(`https://api.unsplash.com/topics/${topic}/photos?page=${page}&client_id=9m5Etw8AI1no-i5EUQqpWnc7SpOigq34Q8lnJaYZZvo`, this.httpOptions)
    }
    else {
      return this._HttpClient.get(`https://api.unsplash.com/photos?page=${page}&client_id=9m5Etw8AI1no-i5EUQqpWnc7SpOigq34Q8lnJaYZZvo`, this.httpOptions);
    }

  }
  getoo(): Observable<any> {
    return this._HttpClient.get('https://api.unsplash.com/topics?page=1&client_id=9m5Etw8AI1no-i5EUQqpWnc7SpOigq34Q8lnJaYZZvo',this.httpOptions)
  }
  

}
