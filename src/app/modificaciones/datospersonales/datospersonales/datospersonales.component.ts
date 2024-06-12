import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { RutinaService } from '../../../services/rutina.service';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrl: './datospersonales.component.css'
})
export class DatospersonalesComponent implements OnInit {

  editMode = false;
  datosPersonales: any= '';
  nombre: string = '';
  apellidos: string = '';
  email: string = '';
  altura: number = 0;
  genero: string = '';
  nivel_experiencia: string = '';

  constructor(private fb: FormBuilder, private userService: UserService, private toastr : ToastrService, private route : Router, private rutinaService : RutinaService) {
    
  }

  ngOnInit(): void {
    this.getDatopPersonales();
  }

  getDatopPersonales() {
    this.userService.getDatosPersonales().subscribe((data) => {
      this.datosPersonales = data[0];
      console.log(this.datosPersonales.nombre);
      this.nombre = this.datosPersonales.nombre
      this.apellidos = this.datosPersonales.apellidos
      this.altura = this.datosPersonales.altura
      this.genero = this.datosPersonales.genero
      this.nivel_experiencia = this.datosPersonales.nivel_experiencia
      this.email= this.datosPersonales.email
    });
    
  }

 

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
  descardChanges(){
    this.toggleEditMode()
    this.getDatopPersonales()
  }

  saveChanges() {
    if(this.nombre == '' || this.apellidos == '' || this.genero == '' || this.nivel_experiencia == '' ){
      this.toastr.error('Todos los campos son obligatorios', 'Error')
      return
    }
    if(this.altura <= 0){
      this.toastr.error('La altura no puede ser negativa o nulo', 'Error')
      return
    }
    this.editMode = false;
    // Aquí puedes implementar la lógica para guardar los cambios, por ejemplo, hacer una petición HTTP
   
    const datosPersonalesUpdate = {
      nombre: this.nombre,
      apellidos: this.apellidos,
      altura: this.altura,
      genero: this.genero,
      nivel_experiencia: this.nivel_experiencia,
      email: this.email
    }
    console.log(datosPersonalesUpdate)
    this.userService.updateDatosPersonales(datosPersonalesUpdate).subscribe({
      next: (token) => {
        this.toastr.success('Datos personales actualizados correctamente', 'Éxito')
        const rutaActual = this.route.url;
        this.rutinaService.actualizarRutina().subscribe(data =>{   

          this.toastr.success('¡Has actualizado tu rutina!');
    
        }, (event : HttpErrorResponse) => {
          console.log(event.error.msg);
          this.toastr.error(event.error.msg, 'Error')
        })
    
    // Navegar a la misma ruta para recargar el componente
      
      },
      error: (e : HttpErrorResponse) =>{
        this.toastr.error(e.error.msg, 'Error')
      },
    })
  }
}
