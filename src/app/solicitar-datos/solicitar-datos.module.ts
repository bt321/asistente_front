import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitarDatosComponent } from './solicitar-datos/solicitar-datos.component';



@NgModule({
  declarations: [
    SolicitarDatosComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [SolicitarDatosComponent]
})
export class SolicitarDatosModule { }
