import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DietaService } from '../../services/dieta.service';
import { ToastrService } from 'ngx-toastr';
import { Dieta } from '../../interfaces/dieta';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrl: './dieta.component.css'
})
export class DietaComponent implements OnInit {
  dietaList: Dieta[] = []
  dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

  constructor(private route : Router, private dietaService : DietaService, private toastr : ToastrService ){}
  ngOnInit() { 
    this.getDieta();
   }

   getDieta(){
    this.dietaService.getDieta().subscribe(data => 
      {
        
        this.dietaList = data.slice(0, 7);;
        console.log(this.dietaList)
      }
    )
   }
   actualizarDieta(){
    this.dietaService.ActualizarDieta().subscribe(data =>{
      this.dietaList = data;
        console.log(this.dietaList)
    })
   }



}
