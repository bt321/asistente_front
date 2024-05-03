import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-datos2',
  templateUrl: './solicitar-datos2.component.html',
  styleUrl: './solicitar-datos2.component.css'
})
export class SolicitarDatos2Component implements OnInit {
  constructor(private route : Router){}
  ngOnInit() {  }
  objetivo(){
    this.route.navigate(['/objetivo'])
  }

}
