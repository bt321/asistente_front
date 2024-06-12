import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Dieta } from '../interfaces/dieta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietaService {

  private myAppUrl: string;
  private myApiUrl : string;

  constructor(private http : HttpClient) {
    this.myAppUrl = environment.endpont;
    this.myApiUrl = 'api/dieta/';

  }
  getDieta(): Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`) 
    return this.http.get<Dieta[]>(`${this.myAppUrl}${this.myApiUrl}/`, { headers: headers});
}
  ActualizarDieta():  Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`) 
    return this.http.get<Dieta[]>(`${this.myAppUrl}${this.myApiUrl}/actualizarDieta`, { headers: headers});
  }


}

