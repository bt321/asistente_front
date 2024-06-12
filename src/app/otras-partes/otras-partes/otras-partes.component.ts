import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-otras-partes',
  templateUrl: './otras-partes.component.html',
  styleUrl: './otras-partes.component.css'
})
export class OtrasPartesComponent implements OnInit {
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
  constructor(private route : Router, private userService : UserService, private toastr: ToastrService){}
  ngOnInit() {}

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
  volver(){
    this.route.navigate(['/parteFuerte'])
  }

  tipoEjercicio(){
    this.parteSelec();
    if (this.otrasPartesSeleccionadas == ''){
      this.toastr.error(`Debe seleccionar un musculo`, 'Error')
      return
    } 
    
    this.otrasPartesSeleccionadas = this.otrasPartesSeleccionadas.slice(0,-2);
    this.userService.setOtrasParte(this.otrasPartesSeleccionadas);
    this.toastr.success(`Datos recogidos correctamente`, 'Siguiente paso');
    this.route.navigate(['/tipoEjercicio']);
  }

}
