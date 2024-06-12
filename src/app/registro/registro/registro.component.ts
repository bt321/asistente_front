import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
  username: string = '';
  password:string='';
  email:string='';
  password2:string='';
  nombre: string='';
  apellidos:string='';
  genero:string='';
  altura:number;
  nivel_experiencia:string='';
  constructor(private route : Router, private toastr: ToastrService, private userService : UserService){}
  ngOnInit(){}

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  solicitar_datos(){
    //validamos que el usuario ingrese valores
    if(this.username=='' || this.password=='' || this.nombre=='' || this.apellidos=='' || this.genero=='' || this.altura==null || this.nivel_experiencia=='' || this.email=='' ){
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }
    if(this.altura<=0){
      this.toastr.error('La altura no puede ser negativa ni cero', 'Error');
      return;
    }

    if(!this.isValidEmail(this.email)){
       this.toastr.error('El correo electrónico no es válido', 'Error')
       return
    }

    //comprobamos que las contraseñas sean iguales
    if(this.password != this.password2){
      this.toastr.error('Las contraseñas no coinciden', 'Error');
      return;
    }
    const user: User = {
      username: this.username,
      password: this.password,
      nombre: this.nombre,
      apellidos: this.apellidos,
      genero: this.genero,
      altura: this.altura,
      nivel_experiencia: this.nivel_experiencia,
      email: this.email
    }

    
    this.userService.comprobarUser(user).subscribe(data =>{
      this.toastr.success(`Datos recogidos correctamente`, 'Siguiente paso')
      this.userService.setDatosPersonales(user);
      this.route.navigate(['/objetivo']) ;
      
    }, (event : HttpErrorResponse) => {
      console.log(event.error.msg);
      this.toastr.error(event.error.msg, 'Error')
    })
   

   // this.userService.signIn().subscribe(data =>{
   //   this.toastr.success(`Datos recogidos correctamente`, 'Siguiente paso')
   //   this.route.navigate(['/objetivo']) ;
   //   
   // }, (event : HttpErrorResponse) => {
   //   console.log(event.error.msg);
   //   this.toastr.error(event.error.msg, 'Error')
   // })
    //this.userService.setDatosPersonales(user)
    //this.toastr.success(`Datos recogidos correctamente`, 'Siguiente paso')
    //this.route.navigate(['/objetivo']) ;
   }
}
