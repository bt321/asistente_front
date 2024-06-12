import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RutinaService } from '../../services/rutina.service';
import { Rutina } from '../../interfaces/rutina';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrl: './rutina.component.css'
})
export class RutinaComponent implements OnInit {
  listaRutina: Rutina[] = [];
  rutina_dia:{ [key: string]: string[] } ={}

  Lunes :string[] = [];
  Martes :string[] = [];
  Miercoles :string[] = [];
  Jueves :string[] = [];
  Viernes :string[] = [];
  Sabado :string[] = [];
  Domingo :string[] = [];
  dias :string[] = [];

  
  
  
  constructor(private route : Router, private rutinaService : RutinaService, private userService : UserService, private toastr : ToastrService ){}
  ngOnInit() { 
    this.getListRutina();
   }
   getListRutina(){
    this.rutinaService.getRutina().subscribe((data)=>{
      console.log(data);
      this.listaRutina = data;
      for (const rutina of data) {
        this.dias.push(rutina.dias_semana)
        console.log(this.dias)
        const ejerciciosArray: string[] = rutina.rutina_dia.split(', ')
        if(rutina.dias_semana == 'Lunes'){
          this.Lunes = ejerciciosArray
        }
        if(rutina.dias_semana =='Martes'){
          this.Martes = ejerciciosArray
        }
        if(rutina.dias_semana == 'Miercoles'){
          this.Miercoles = ejerciciosArray
        }
        if(rutina.dias_semana == 'Jueves'){
          this.Jueves = ejerciciosArray
        }
        if(rutina.dias_semana == 'Viernes'){
          this.Viernes = ejerciciosArray
        }
        if(rutina.dias_semana == 'Sabado'){
          this.Sabado = ejerciciosArray
        }
        if(rutina.dias_semana == 'Domingo'){
          this.Domingo = ejerciciosArray
        }
      }
      
      this.rutina_dia = {
        Lunes: this.Lunes,
        Martes: this.Martes,
        Miercoles: this.Miercoles,
        Jueves: this.Jueves,
        Viernes: this.Viernes,
        Sabado: this.Sabado,
        Domingo: this.Domingo,
      };
      
    })
   }

   getMaxRutinas(): number[] {
    let maxLength = 0;
    for (const dia of this.dias) {
      if (this.rutina_dia[dia].length > maxLength) {
        maxLength = this.rutina_dia[dia].length;
      }
    }
    return Array.from({ length: maxLength }, (_, i) => i);
  }

  cerrarSesion(){
  this.route.navigate(['/inicio_sesion'])
  }
  home(){
    this.route.navigate(['/menu'])
  }
  dieta(){}
  rutina(){
    this.route.navigate(['/rutina'])
  }
  actualizarRutina(){
    this.rutinaService.actualizarRutina().subscribe(data =>{   

      this.toastr.success('¡Has actualizado tu rutina!');
      this.refrescar()

    }, (event : HttpErrorResponse) => {
      console.log(event.error.msg);
      this.toastr.error(event.error.msg, 'Error')
      
    })
    
    
  }
  refrescar(){
    const rutaActual = this.route.url;
    this.route.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.route.navigate([rutaActual]);
    });
  }
  
  actualizarDatos(){}
}
