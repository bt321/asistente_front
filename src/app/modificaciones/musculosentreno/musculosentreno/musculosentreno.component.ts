import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { RutinaService } from '../../../services/rutina.service';

@Component({
  selector: 'app-musculosentreno',
  templateUrl: './musculosentreno.component.html',
  styleUrl: './musculosentreno.component.css'
})
export class MusculosentrenoComponent implements OnInit {
  ngOnInit() {  }
  editMode = false;
  musculoDesarrollo:string=''
  musculoFuerte:string=''
  otrasPartesSeleccionadas:string ='';
  Abdominales:string='';
  Aductores:string='';
  Abductores:string='';
  Biceps:string='';
  Gemelos:string='';
  Pecho:string='';
  Antebrazos:string='';
  Gluteos:string='';
  Isquiotibiales:string='';
  Dorsales:string='';
  Espalda_baja:string='';
  Espalda_media:string='';
  Trapecio:string='';
  Cuello:string='';
  Cuadriceps:string='';
  Hombros:string='';
  Triceps:string='';
  constructor(private route : Router, private userService: UserService,  private toastr: ToastrService, private rutinaService : RutinaService){}

  parteSelec(){
    if(this.Abdominales){
      //this.otrasPartesSeleccionadas.push('Abdominales');
      this.otrasPartesSeleccionadas += 'Abdominales, ';
    }
    if(this.Aductores){
      //this.otrasPartesSeleccionadas.push('Aductores');
      this.otrasPartesSeleccionadas += 'Aductores, ';
    }
    if(this.Abductores){
      //this.otrasPartesSeleccionadas.push('Abductores');
      this.otrasPartesSeleccionadas += 'Abductores, ';
    }
    if(this.Biceps){
      //this.otrasPartesSeleccionadas.push('Bíceps');
      this.otrasPartesSeleccionadas += 'Bíceps, ';
    }
    if(this.Gemelos){
      //this.otrasPartesSeleccionadas.push('Gemelos');
      this.otrasPartesSeleccionadas += 'Gemelos, ';
    }
    if(this.Pecho){
      //this.otrasPartesSeleccionadas.push('Pecho');
      this.otrasPartesSeleccionadas += 'Pecho, ';
    }
    if(this.Antebrazos){
      //this.otrasPartesSeleccionadas.push('Antebrazos');
      this.otrasPartesSeleccionadas += 'Antebrazos, ';
    }
    if(this.Gluteos){
      //this.otrasPartesSeleccionadas.push('Glúteos');
      this.otrasPartesSeleccionadas += 'Glúteos, ';
    }
    if(this.Isquiotibiales){
      //this.otrasPartesSeleccionadas.push('Isquiotibiales');
      this.otrasPartesSeleccionadas += 'Isquiotibiales, ';
    }
    if(this.Dorsales){
      //this.otrasPartesSeleccionadas.push('Dorsales');
      this.otrasPartesSeleccionadas += 'Dorsales, ';
    }
    if(this.Espalda_baja){
      //this.otrasPartesSeleccionadas.push('Espalda baja');
      this.otrasPartesSeleccionadas += 'Espalda baja, ';
    }
    if(this.Espalda_media){
      //this.otrasPartesSeleccionadas.push('Espalda media');
      this.otrasPartesSeleccionadas += 'Espalda media, ';
    }
    if(this.Trapecio){
      //this.otrasPartesSeleccionadas.push('Traps');
      this.otrasPartesSeleccionadas += 'Traps, ';
    }
    if(this.Cuello){
      //this.otrasPartesSeleccionadas.push('Cuello');
      this.otrasPartesSeleccionadas += 'Cuello, ';
    }
    if(this.Cuadriceps){
      //this.otrasPartesSeleccionadas.push('Cuádriceps');
      this.otrasPartesSeleccionadas += 'Cuádriceps, ';
    }
    if(this.Hombros){
      //this.otrasPartesSeleccionadas.push('Hombros');
      this.otrasPartesSeleccionadas += 'Hombros, ';
    }
    if(this.Triceps){
      //this.otrasPartesSeleccionadas.push('Tríceps');
      this.otrasPartesSeleccionadas += 'Tríceps, ';
    }

  }
  actualizar_musculo(){
    this.parteSelec();
    this.otrasPartesSeleccionadas = this.otrasPartesSeleccionadas.slice(0,-2);
    const datos={
      musculo_desarrollo: this.musculoDesarrollo,
      musculo_fuerte: this.musculoFuerte,
      otros_musculos: this.otrasPartesSeleccionadas
    }
    console.log(datos)
    if(this.musculoDesarrollo == ''|| this.musculoFuerte == '' || this.otrasPartesSeleccionadas == ''){
      this.toastr.error('Tienes que seleccionar al menos un musculo de cada apartado', 'Error');
       return
    }
    this.userService.updateMusculos(datos).subscribe(data =>{
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

  descardChanges(){
  this.toggleEditMode();
  this.musculoDesarrollo=''
  this.musculoFuerte=''
  this.otrasPartesSeleccionadas ='';
  this.Abdominales='';
  this.Aductores='';
  this.Abductores='';
  this.Biceps='';
  this.Gemelos='';
  this.Pecho='';
  this.Antebrazos='';
  this.Gluteos='';
  this.Isquiotibiales='';
  this.Dorsales='';
  this.Espalda_baja='';
  this.Espalda_media='';
  this.Trapecio='';
  this.Cuello='';
  this.Cuadriceps='';
  this.Hombros='';
  this.Triceps='';
  }

  saveChanges() {
    this.editMode = false;
    
  }


}
