import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  mostrarComponenteOrigen: boolean = true;
  constructor(private route : Router){}
  ngOnInit() {
    
  }
  irInicio() {
    //console.log('inicio_sesion')
    this.route.navigate(['/inicio_sesion'])
    this.mostrarComponenteOrigen = false;
}

 
}

