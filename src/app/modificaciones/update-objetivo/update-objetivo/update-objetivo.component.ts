import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PasswdService } from '../../../services/passwd.service';
import { ObjetivoService } from '../../../services/objetivo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-objetivo',
  templateUrl: './update-objetivo.component.html',
  styleUrl: './update-objetivo.component.css'
})
export class UpdateObjetivoComponent implements OnInit {
  editMode = false;
  datosObjetivo: any ='';
  peso_actual: number=0;
  peso_objetivo: number=0;
  tipo_objetivo: string='';
  constructor(private route : Router, private toastr: ToastrService, private objetivoServie : ObjetivoService){}

  ngOnInit() {
    this.getObjetivo();
  }

  getObjetivo(){
    this.objetivoServie.getObjetivo().subscribe((data) => {
      this.datosObjetivo = data[0];
      console.log(this.datosObjetivo);
      this.peso_actual = this.datosObjetivo.peso_actual
      this.peso_objetivo = this.datosObjetivo.peso_objetivo
      this.tipo_objetivo = this.datosObjetivo.tipo_objetivo
    });
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  descardChanges(){
    this.toggleEditMode();
    this.getObjetivo();
  }

  saveChanges() {
    
    if(this.peso_actual <= 0 || this.peso_objetivo <=0){
      this.toastr.error('El peso no puede ser negativo ni 0', 'Error')
      return
    }
    if(this.tipo_objetivo == ''){
      this.toastr.error('El campo tipo de objetivo es obligatorio', 'Error')
      return
    }
    this.editMode = false;
    const datosObjetivo = {
      peso_actual: this.peso_actual,
      peso_objetivo: this.peso_objetivo,
      tipo_objetivo: this.tipo_objetivo
    }
    console.log(datosObjetivo)
    this.objetivoServie.updateObjetivo(datosObjetivo).subscribe({
      next: (token) => {
        this.toastr.success('Objetivo actualizados correctamente', 'Éxito')
        const rutaActual = this.route.url;
    
    // Navegar a la misma ruta para recargar el componente
      
      },
      error: (e : HttpErrorResponse) =>{
        this.toastr.error(e.error.msg, 'Error')
        
      },
    })
  
  }
}
