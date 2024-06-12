import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private myAppUrl: string;
  private myApiUrl : string;

  constructor(private http : HttpClient) {
    this.myAppUrl = environment.endpont;
    this.myApiUrl = 'api/home/';

  }

  getDatosUser(): Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers});

}
}
