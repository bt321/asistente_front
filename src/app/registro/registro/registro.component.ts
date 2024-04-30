import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
  constructor(private route : Router){}
  ngOnInit(){}

  solicitar_datos(){
    this.route.navigate(['/solicita_datos'])
  }

}
