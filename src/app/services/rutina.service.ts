import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Rutina } from '../interfaces/rutina';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  private myAppUrl: string;
  private myApiUrl : string;

  constructor(private http : HttpClient) {
    this.myAppUrl = environment.endpont;
    this.myApiUrl = 'api/rutina/';
  }
   
  generarRutina(datos:any): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, datos);
  }
  getRutina(): Observable<Rutina[]>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`) 
    return this.http.get<Rutina[]>(`${this.myAppUrl}${this.myApiUrl}getRutina/`, { headers: headers});
}
  actualizarRutina(): Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`) 
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}actualizarRutina/`, { headers: headers});

  }

}
