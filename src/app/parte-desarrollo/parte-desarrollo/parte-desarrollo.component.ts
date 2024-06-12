import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Musculos } from '../../interfaces/musculos';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-parte-desarrollo',
  templateUrl: './parte-desarrollo.component.html',
  styleUrl: './parte-desarrollo.component.css'
})
export class ParteDesarrolloComponent implements OnInit {
  musculoDesarrollo: string= '';
  constructor(private route : Router, private userService : UserService, private toastr : ToastrService){}
  ngOnInit() {} 
  parteFuerte(){
    if (this.musculoDesarrollo == ''){
      this.toastr.error(`Debe seleccionar un musculo`, 'Error')
      return
    }   
         
    this.userService.setParteDesarrollo(this.musculoDesarrollo);
    //this.userService.musculo(musculo).subscribe(data =>{
    //  this.toastr.success(`Datos recogidos correctamente`, 'Siguiente paso')
    //  this.route.navigate(['/menu']) ;
    //  
    //}, (event : HttpErrorResponse) => {
    //  console.log(event.error.msg);
    //  this.toastr.error(event.error.msg, 'Error')
    //});
    this.toastr.success(`Datos recogidos correctamente`, 'Siguiente paso')
    this.route.navigate(['/parteFuerte'])
  }
  volver(){
    this.route.navigate(['/descanso'])
  }

}
