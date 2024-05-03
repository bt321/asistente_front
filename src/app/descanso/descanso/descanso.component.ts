import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-descanso',
  templateUrl: './descanso.component.html',
  styleUrl: './descanso.component.css'
})
export class DescansoComponent implements OnInit{
  constructor(private route : Router){}
  ngOnInit() {  }
  diasSemana: string[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  diasSeleccionados: { [key: string]: boolean } = {};

  recogerSeleccion() {
    const seleccionados: string[] = this.diasSemana.filter(dia => this.diasSeleccionados[dia]);
    console.log('Días seleccionados:', seleccionados);
    // Aquí puedes hacer lo que necesites con los días seleccionados
  }

  menu(){
    this.route.navigate(['/menu'])
  }
  
 
}
  
