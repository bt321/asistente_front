import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoEjercicioComponent } from './tipo-ejercicio/tipo-ejercicio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TipoEjercicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TipoEjercicioModule { }
