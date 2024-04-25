import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string;
  password: string;


  login() {
    console.log('Nombre de usuario:', this.username);
    console.log('Contraseña:', this.password);  

}
}
