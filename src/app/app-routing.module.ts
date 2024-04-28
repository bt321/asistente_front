import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { SolicitarDatosComponent } from './solicitar-datos/solicitar-datos/solicitar-datos.component';


const routes: Routes = [
  {path : 'inicio_sesion', component: LoginComponent},
  {path : 'registrarse', component: RegistroComponent},
  {path : 'solicita_datos', component: SolicitarDatosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
