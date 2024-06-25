import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetivoService {

  private myAppUrl: string;
  private myApiUrl : string;

  constructor(private http : HttpClient) {
    this.myAppUrl = environment.endpont;
    this.myApiUrl = 'api/objetivo/';

  }

  getObjetivo(): Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}`, { headers: headers});

  }
  updateObjetivo(data:any): Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    const datos = {
      token: token,
      data
    }
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}updateObjetivo/`, datos);
  }
}
