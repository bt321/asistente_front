import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { 
  }
  login(data :any){
    this.http.post<any>('http://localhost:3000/api/data', data)

  }
}
