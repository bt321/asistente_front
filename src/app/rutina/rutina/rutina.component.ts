import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  
  styleUrl: './rutina.component.css'
})
export class RutinaComponent implements OnInit {
  constructor(private route : Router){}
  ngOnInit() {  }
  cerrarSesion(){
  this.route.navigate(['/inicio_sesion'])
  }
  dieta(){}
  rutina(){}
  actualizarDatos(){}

  

}
