import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinaComponent } from './rutina/rutina.component';



@NgModule({
  declarations: [
    RutinaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RutinaComponent
  ]
})
export class RutinaModule { }
