import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule

  ]
})
export class RegistroModule { }
