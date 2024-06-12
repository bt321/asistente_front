import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute  } from '@angular/router';
import { RutinaService } from '../../services/rutina.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  nombre: string = '';
  musculo_desarrollo : string = '';
  musculo_fuerte : string = '';
  musculo_otros : string = '';
  dias_descanso: string = '';
  peso_objetivo: number = 0;
  peso_actual: number = 0;
  tipo_objetivo: string = '';
  tipo_ejercicios: string = '';
  nivel_experiencia: string='';
  altura: number = 0;




  constructor(private route : Router, private rutinaService : RutinaService, private toastr : ToastrService, private homeService : HomeService, private rout: ActivatedRoute){}
  ngOnInit() {
    this.getDatosUser();
   }
  cerrarSesion(){
  this.route.navigate(['/inicio_sesion'])
  }
  dieta(){}
  rutina(){
    //this.rutinaService.getRutina().subscribe(data =>{
    //  this.toastr.success(`Se ha registrado correctamente`, 'Éxito')
    //  this.route.navigate(['/rutina']);
    //        
    //}, (event : HttpErrorResponse) => {
    //  console.log(event.error.msg);
    //  this.toastr.error(event.error.msg, 'Error')
    //})
    this.route.navigate(['/rutina']);
  }
  actualizarDatos(){
    this.route.navigate(['/actualizar_datos']);
  }
  getDatosUser(){
    this.homeService.getDatosUser().subscribe((data) =>{
      console.log(data)
      //this.musculo_desarrollo = data.musculoEntreno[0].musculo_desarrollo

      this.musculo_desarrollo= data.MusculoEntreno[0].musculo_desarrollo;
      this.musculo_fuerte =data.MusculoEntreno[0].musculo_fuerte;
      this.musculo_otros =data.MusculoEntreno[0].otros_musculos;
      this.dias_descanso = data.diasDescanso[0].dias_semana;
      this.peso_objetivo = data.objetivos[0].peso_objetivo;
      this.peso_actual = data.objetivos[0].peso_actual;
      this.tipo_objetivo = data.objetivos[0].tipo_objetivo;
      this.tipo_ejercicios = data.tipoEjercicios[0].tipoEjercicio
      this.nivel_experiencia = data.user[0].nivel_experiencia
      this.altura = data.user[0].altura
      this.nombre = data.user[0].nombre


            
    }, (event : HttpErrorResponse) => {
      console.log(event.error.msg);
      this.toastr.error(event.error.msg, 'Error')
    })
  
  
  }

  

}
