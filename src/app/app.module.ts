import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SolicitarDatosComponent } from './solicitar-datos/solicitar-datos/solicitar-datos.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { SolicitarDatosModule } from './solicitar-datos/solicitar-datos.module';
import { SolicitarDatos2Module } from './solicitar-datos2/solicitar-datos2.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { RegistroModule } from './registro/registro.module';
import { RutinaModule } from './rutina/rutina.module';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    SolicitarDatosModule,
    SolicitarDatos2Module,
    RegistroModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    RutinaModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 