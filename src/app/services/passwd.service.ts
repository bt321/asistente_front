import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PasswdService {
  private myAppUrl: string;
  private myApiUrl : string;

  constructor(private http : HttpClient) {
    this.myAppUrl = environment.endpont;
    this.myApiUrl = 'api/passwd/';
  }
  updatePasswd(datos:any): Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    const data ={
      newPasswd: datos.newPasswd,
      oldPasswd: datos.oldPaasswd,
      token: token
    } 
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, data);
  }
  recuperarPasswd(datos:any): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}recuperarPasswd`, datos);
  }

  updatePasswd2(datos:any): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}updatePasswd`, datos);
}
}
