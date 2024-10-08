import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { RutinaService } from '../../../services/rutina.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-tipoejer',
  templateUrl: './tipoejer.component.html',
  styleUrl: './tipoejer.component.css'
})
export class TipoejerComponent implements OnInit {
  editMode = false;
  tipoEjercicioSeleccionado:string='';
  tipoEjercicios:string[]=[]
  Fuerza:string='';
  Cardio:string='';
  Estiramiento:string='';
  Levantamiento_de_pesas:string='';
  Pliometria:string='';
  Atletismo_de_fuerza:string='';
  CrossFit:string='';
  constructor(private route : Router, private userService : UserService, private toastr: ToastrService, private rutinaService : RutinaService, private homeService : HomeService){}
  ngOnInit() {
    this.getDatosUser()
  }

  getDatosUser(){
    this.homeService.getDatosUser().subscribe((data) =>{    
      console.log(data)
      
      this.tipoEjercicios=data.tipoEjercicios[0].tipoEjercicio.split(", ")
      if(this.tipoEjercicios.includes("Fuerza")){
        this.Fuerza="true"
      } 
      if(this.tipoEjercicios.includes("Cardio")){
        this.Cardio="true"
      } 
      if(this.tipoEjercicios.includes("Estiramiento")){
        this.Estiramiento="true"
      } 
      if(this.tipoEjercicios.includes("Levantamiento de pesas")){
        this.Levantamiento_de_pesas="true"
      } 
      if(this.tipoEjercicios.includes("Pliometria")){
        this.Pliometria="true"
      } 
      if(this.tipoEjercicios.includes("Atletismo de fuerza")){
        this.Atletismo_de_fuerza="true"
      } 
      if(this.tipoEjercicios.includes("CrossFit")){
        this.CrossFit="true"
      }
      
     
      
    }, (event : HttpErrorResponse) => {
      console.log(event.error.msg);
      this.toastr.error(event.error.msg, 'Error')
    })
  
  
  }

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
  actualizar_tipoejer(){

    this.tipoSeleccionado();
    if(this.tipoEjercicioSeleccionado == ''){
      this.toastr.error('Debe seleccionar al menos un tipo de ejercicios', 'Error')
      return
    }
    this.tipoEjercicioSeleccionado = this.tipoEjercicioSeleccionado.slice(0, -2);
    
    this.userService.updateTipoEjer(this.tipoEjercicioSeleccionado).subscribe(data =>{
      this.toastr.success(`Musculos de entreno actualizados correctamente`, 'Éxito')
      const rutaActual = this.route.url;
    
    // Navegar a la misma ruta para recargar el componente
      this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.route.navigate([rutaActual]);
      });
      
    }, (event : HttpErrorResponse) => {
      console.log(event.error.msg);
      this.toastr.error(event.error.msg, 'Error')
    })
    this.rutinaService.actualizarRutina().subscribe(data =>{   

      this.toastr.success('¡Has actualizado tu rutina!');

    }, (event : HttpErrorResponse) => {
      console.log(event.error.msg);
      this.toastr.error(event.error.msg, 'Error')
    })

  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
  discardChanges(){
    this.toggleEditMode();
    this.Fuerza='';
    this.Cardio='';
    this.Estiramiento='';
    this.Levantamiento_de_pesas='';
    this.Pliometria='';
    this.Atletismo_de_fuerza='';
    this.CrossFit='';
  }

  saveChanges() {
    this.editMode = false;
    
  }

}
