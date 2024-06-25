import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { SolicitarDatosComponent } from './solicitar-datos/solicitar-datos/solicitar-datos.component';
import { SolicitarDatos2Component } from './solicitar-datos2/solicitar-datos2/solicitar-datos2.component';
import { ObjetivoComponent } from './objetivo/objetivo/objetivo.component';
import { DescansoComponent } from './descanso/descanso/descanso.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ParteDesarrolloComponent } from './parte-desarrollo/parte-desarrollo/parte-desarrollo.component';
import { ParteFuerteComponent } from './parte-fuerte/parte-fuerte/parte-fuerte.component';
import { OtrasPartesComponent } from './otras-partes/otras-partes/otras-partes.component';
import { TipoEjercicioComponent } from './tipo-ejercicio/tipo-ejercicio/tipo-ejercicio.component';
import { RutinaComponent } from './rutina/rutina/rutina.component';
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
import { ServiciosComponent } from './servicios/servicios/servicios.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'inicio_sesion', component: LoginComponent},
  {path : 'registrarse', component: RegistroComponent},
  {path : 'solicita_datos', component: SolicitarDatosComponent},
  {path : 'solicita_datos2', component: SolicitarDatos2Component},
  {path : 'objetivo', component: ObjetivoComponent},
  {path : 'descanso', component: DescansoComponent},
  {path : 'menu', component: MenuComponent},
  {path : 'parteDesarrollo', component: ParteDesarrolloComponent},
  {path : 'parteFuerte', component: ParteFuerteComponent},
  {path : 'otrasPartes', component: OtrasPartesComponent},
  {path : 'tipoEjercicio', component: TipoEjercicioComponent},
  {path : 'rutina', component: RutinaComponent},
  {path : 'actualizar_datos', component: ActualizardatosComponent},
  {path : 'passwd', component: PasswdComponent},
  {path : 'descansoUpdate', component: DescansosComponent},
  {path : 'musculosentreno', component: MusculosentrenoComponent},
  {path : 'tipoEjer', component: TipoejerComponent},
  {path : 'updateDatosPersonales', component: DatospersonalesComponent},
  {path : 'updateObjetivo', component: UpdateObjetivoComponent},
  {path : 'dieta', component: DietaComponent},
  {path : 'recuperarPasswd', component: RecuperarpasswdComponent},
  {path : 'recuperarPasswd2', component: Recuperarpasswd2Component},
  {path : 'contacto', component: ContactoComponent},
  {path : 'sobreNosotros', component: SobrenosotrosComponent},
  {path : 'servicios', component: ServiciosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
