import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ObjetivoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class ObjetivoModule { }
