import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private loginUrl = 'http://localhost:3001/api/users'

  constructor(private http : HttpClient) {}

  login(data:any): Promise<any> {
    return this.http.post(this.loginUrl, data).toPromise();
  }
}
