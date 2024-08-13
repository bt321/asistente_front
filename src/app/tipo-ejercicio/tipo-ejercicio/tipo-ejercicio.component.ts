import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { RutinaService } from '../../services/rutina.service';

@Component({
  selector: 'app-tipo-ejercicio',
  templateUrl: './tipo-ejercicio.component.html',
  styleUrl: './tipo-ejercicio.component.css'
})
export class TipoEjercicioComponent implements OnInit {
  tipoEjercicioSeleccionado:string='';
  Fuerza:string='';
  Cardio:string='';
  Estiramiento:string='';
  Levantamiento_de_pesas:string='';
  Pliometria:string='';
  Atletismo_de_fuerza:string='';
  CrossFit:string='';
  constructor(private route : Router, private userService : UserService, private toastr: ToastrService, private rutinaService : RutinaService){}
  ngOnInit() {}

  tipoSeleccionado(){
    if(this.Fuerza){
      this.tipoEjercicioSeleccionado += 'Fuerza, ';
    }
    if(this.Cardio){
      this.tipoEjercicioSeleccionado += 'Cardio, ';
    }
    if(this.Estiramiento){
      this.tipoEjercicioSeleccionado += 'Estiramiento, ';
    }
    if(this.Levantamiento_de_pesas){
      this.tipoEjercicioSeleccionado += 'Levantamiento de pesas, ';
    }
    if(this.Pliometria){
      this.tipoEjercicioSeleccionado += 'Pliometria, ';
    }
    if(this.Atletismo_de_fuerza){
      this.tipoEjercicioSeleccionado += 'Atletismo de fuerza, ';
    }
    if(this.CrossFit){
      this.tipoEjercicioSeleccionado += 'CrossFit, ';
    }
  }
  volver(){
    this.route.navigate(['/otrasPartes'])
  }
  menu(){
    this.tipoSeleccionado();
    if(this.tipoEjercicioSeleccionado==''){
      this.toastr.error('Debe seleccionar al menos un tipo de ejercicio', 'Error');
      return;
    }
    this.tipoEjercicioSeleccionado = this.tipoEjercicioSeleccionado.slice(0, -2);
    this.userService.setTipoEjercicios(this.tipoEjercicioSeleccionado)
    //this.userService.signIn().subscribe(data =>{
    //  this.toastr.success(`Se ha registrado correctamente`, 'Éxito')
    //  this.route.navigate(['/inicio_sesion']);
    //}  
    //, (event : HttpErrorResponse) => {
    //  console.log(event.error.msg);
    //  this.toastr.error(event.error.msg, 'Error')
    //})
    this.userService.registrarUsuarioYGenerarRutina();
    
    //this.toastr.success(`Usuario registrado correctamente`, 'Dado de alta');
    //this.route.navigate(['/menu']); 
  }
}
