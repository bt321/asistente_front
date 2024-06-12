import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietaComponent } from './dieta/dieta.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DietaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DietaModule { }
