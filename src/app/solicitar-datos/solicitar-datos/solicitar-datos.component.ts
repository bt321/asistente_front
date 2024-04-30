import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-datos',
  templateUrl: './solicitar-datos.component.html',
  styleUrl: './solicitar-datos.component.css'
})
export class SolicitarDatosComponent implements OnInit {
  constructor(private route : Router){}
  ngOnInit(){}

  continuar(){
    this.route.navigate(['/solicita_datos2'])
  }
}
