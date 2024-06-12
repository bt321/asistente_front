import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswdComponent } from './passwd/passwd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PasswdComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PasswdModule { }
