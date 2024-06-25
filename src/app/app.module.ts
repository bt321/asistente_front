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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroModule } from './registro/registro.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ParteDesarrolloModule } from './parte-desarrollo/parte-desarrollo.module';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObjetivoModule } from './objetivo/objetivo.module';
import { CommonModule } from '@angular/common';
import { ParteFuerteComponent } from './parte-fuerte/parte-fuerte/parte-fuerte.component';
import { OtrasPartesComponent } from './otras-partes/otras-partes/otras-partes.component';
import { TipoEjercicioComponent } from './tipo-ejercicio/tipo-ejercicio/tipo-ejercicio.component';
import { RutinaComponent } from './rutina/rutina/rutina.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ActualizardatosComponent } from './actualizardatos/actualizardatos/actualizardatos.component';
import { PasswdComponent } from './modificaciones/passwd/passwd/passwd.component';
import { DescansosComponent } from './modificaciones/descansos/descansos/descansos.component';
import { MusculosentrenoComponent } from './modificaciones/musculosentreno/musculosentreno/musculosentreno.component';
import { TipoejerComponent } from './modificaciones/tipoejer/tipoejer/tipoejer.component';
import { DatospersonalesComponent } from './modificaciones/datospersonales/datospersonales/datospersonales.component';
import { UpdateObjetivoComponent } from './modificaciones/update-objetivo/update-objetivo/update-objetivo.component';
import { DietaComponent } from './dieta/dieta/dieta.component';
import { RecuperarpasswdComponent } from './recuperarpasswd/recuperarpasswd/recuperarpasswd.component';
import { Recuperarpasswd2Component } from './recuperarpasswd2/recuperarpasswd2/recuperarpasswd2.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros/sobrenosotros.component';
import { DescansoComponent } from './descanso/descanso/descanso.component';
import { DescansoModule } from './descanso/descanso.module';
import { ParteDesarrolloComponent } from './parte-desarrollo/parte-desarrollo/parte-desarrollo.component';
import { ServiciosComponent } from './servicios/servicios/servicios.component';



@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ParteFuerteComponent,
    OtrasPartesComponent,
    TipoEjercicioComponent,
    RutinaComponent,
    MenuComponent,
    ActualizardatosComponent,
    PasswdComponent,
    DescansosComponent,
    MusculosentrenoComponent,
    TipoejerComponent,
    DatospersonalesComponent,
    UpdateObjetivoComponent,
    DietaComponent,
    RecuperarpasswdComponent,
    Recuperarpasswd2Component,
    ContactoComponent,
    SobrenosotrosComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ObjetivoModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), 
    BrowserAnimationsModule // required animations module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 