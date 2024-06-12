import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../../login/login/login.component';
import { HomeService } from '../../services/home.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  

  constructor(private route : Router,  private toastr : ToastrService){}
  ngOnInit() {
  }
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


