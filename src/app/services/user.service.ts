import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ParteDesarrolloComponent } from '../parte-desarrollo/parte-desarrollo/parte-desarrollo.component';
import { Musculos } from '../interfaces/musculos';
import { RutinaService } from './rutina.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl : string;

  username:string = ''

  private datosRegistro : any = {
      datosPersonales:{},
      objetivo:{},
      diasDescanso:{},
      musculoentreno:{},
      parteDesarrollo:'',
      parteFuerte:'',
      otrasPartes:'',
      tipoEjercicios:{}
  }
  setDatosPersonales(datos: any) {
    this.datosRegistro.datosPersonales = datos;
    console.log(this.datosRegistro)
  }
  setObjetivo(datos: any) {
    this.datosRegistro.objetivo = datos;
  }
  setDiasDescanso(datos: any) {
    this.datosRegistro.diasDescanso = datos;
    console.log(this.datosRegistro)
  }
  setParteDesarrollo(datos: any) {
    this.datosRegistro.parteDesarrollo = datos;
    console.log(this.datosRegistro)
  }
  setParteFuerte(datos: any) {
    this.datosRegistro.parteFuerte = datos;
    console.log(this.datosRegistro)
  }
  setOtrasParte(datos: any) {
    this.datosRegistro.otrasPartes = datos;
    console.log(this.datosRegistro)
  }
  setTipoEjercicios(datos: any) {
    this.datosRegistro.tipoEjercicios = datos;
    console.log(this.datosRegistro)
  }


  constructor(private http : HttpClient, private rutinaService : RutinaService, private toastr: ToastrService) { 
    this.myAppUrl = environment.endpont;
    this.myApiUrl = 'api/users/';
  }
 
  comprobarUser(user:User){
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}comprobarUser/`, user);
  }

  signIn(): Observable<any>{
    const musculos : Musculos = {  
      musculo_desarrollo: this.datosRegistro.parteDesarrollo,
      musculo_fuerte: this.datosRegistro.parteFuerte,
      otros_musculos: this.datosRegistro.otrasPartes 
      }
    this.datosRegistro.musculoentreno= musculos;
    console.log(this.datosRegistro);
    
    this.rutinaService.generarRutina(this.datosRegistro).subscribe(data =>{
      this.toastr.success(`llamada al programada de rutina`, 'Éxito');
    }, (event : HttpErrorResponse) => {
      console.log(event.error.msg);
      this.toastr.error(event.error.msg, 'Error')
    });

    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, this.datosRegistro
    );     
  };

  

  login(user:User): Observable<any>{
    this.username = user.username
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}login/`, user);
  }

  updateDescansos(data:any): Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    const datos ={
      dias_descanso: data,
      token: token
    }
    this.rutinaService.actualizarRutina().subscribe(data =>{
      this.toastr.success(`llamada al programada de rutina`, 'Éxito');
    }, (event : HttpErrorResponse) => {
      console.log(event.error.msg);
      this.toastr.error(event.error.msg, 'Error')
    });
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}updateDescanso/`, datos);

  }

  updateMusculos(data:any): Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    const datos = {
      token: token,
      data
    }
    console.log(datos)
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}updateMusculos/`, datos);


  }

  updateTipoEjer(data:any): Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    const datos = {
      token: token,
      data
    }
    console.log(datos)
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}updateTipoEjer/`, datos);


  }

  getDatosPersonales(): Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}getDatosPersonales/`, { headers: headers});

  }

  updateDatosPersonales(data:any): Observable<any>{
    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`)
    const datos = {
      token: token,
      data
    }
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}updateDatosPersonales/`, datos);

  }
  

  

}
