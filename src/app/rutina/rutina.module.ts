import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutinaComponent } from './rutina/rutina.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RutinaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class RutinaModule { }
