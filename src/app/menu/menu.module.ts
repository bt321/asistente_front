import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class MenuModule { }
