import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuarios } from '../../modelos/usuarios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password:string='';

  constructor(private route : Router, private toastr: ToastrService, private userService : UserService){}
  ngOnInit() {
  }

  loginUser(){
    //validamos que el usuario ingrese valores
    if(this.username=='' || this.password==''){
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    const user: User = {
      username: this.username,
      password: this.password,
      email: '',
      nombre: '',
      apellidos: '',
      genero: '',
      altura: 0,
      nivel_experiencia: ''
    }

    this.userService.login(user).subscribe({
      next: (token) => {
        this.route.navigate(['/menu'])
        localStorage.setItem('token', token)
      },
      error: (e : HttpErrorResponse) =>{
        this.toastr.error(e.error.msg, 'Error')
        
      },
    })
}
}