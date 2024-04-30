import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../../login/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  //mostrarComponenteOrigen: boolean = true;
  constructor(private route : Router){}
  ngOnInit() {}
  irInicio() {
    //console.log('inicio_sesion')
    this.route.navigate(['/inicio_sesion'])
    //this.mostrarComponenteOrigen = false;
}
  registrarse() {
    //console.log('inicio_sesion')
    this.route.navigate(['/registrarse'])
    //this.mostrarComponenteOrigen = false;
}

 
}


