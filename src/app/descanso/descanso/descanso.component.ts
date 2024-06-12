import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { DiasDescanso } from '../../interfaces/diasdescanso';


@Component({
  selector: 'app-descanso',
  templateUrl: './descanso.component.html',
  styleUrl: './descanso.component.css'
})
export class DescansoComponent implements OnInit{
  ngOnInit() {  }
  diasSeleccionados: string = '';
  Lunes: string = '';
  Martes: string = '';
  Miercoles: string = '';
  Jueves: string = '';
  Viernes: string = '';
  Sabado: string = '';
  Domingo: string = '';

  constructor(private route : Router, private userService: UserService,  private toastr: ToastrService){}
   diasSelec(){
     if(this.Lunes){
       //this.diasSeleccionados.push('Lunes');
       this.diasSeleccionados += 'Lunes, '
     }
     if(this.Martes){
       //this.diasSeleccionados.push('Martes');
       this.diasSeleccionados += 'Martes, '
     }
     if(this.Miercoles){
       //this.diasSeleccionados.push('Miercoles');
       this.diasSeleccionados += 'Miercoles, '
     }
     if(this.Jueves){
       //this.diasSeleccionados.push('Jueves');
       this.diasSeleccionados += 'Jueves, '
     }
     if(this.Viernes){
       //this.diasSeleccionados.push('Viernes');
       this.diasSeleccionados += 'Viernes, '
     }
     if(this.Sabado){
       //this.diasSeleccionados.push('Sabado');
       this.diasSeleccionados += 'Sabado, '
     }
     if(this.Domingo){
       //this.diasSeleccionados.push('Domingo');
       this.diasSeleccionados += 'Domingo, '
     }   
 }

 volver(){
  this.route.navigate(['/objetivo'])
 }


  parteDesarrollo() {
    
    this.diasSelec();
    
    this.diasSeleccionados = this.diasSeleccionados.slice(0, -2)
    const diasdescanso: DiasDescanso = {
      dias_semana: this.diasSeleccionados
    }
    this.userService.setDiasDescanso(diasdescanso);
    this.toastr.success(`Datos recogidos correctamente`, 'Siguiente paso')
    this.route.navigate(['/parteDesarrollo']);
    // Navega al siguiente paso del registro
  }
}
  
 

  
