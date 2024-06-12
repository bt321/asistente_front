import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-parte-fuerte',
  templateUrl: './parte-fuerte.component.html',
  styleUrl: './parte-fuerte.component.css'
})
export class ParteFuerteComponent implements OnInit {
  musculoFuerte: string ='';
  constructor(private route : Router, private userService : UserService, private toastr : ToastrService ){}
  ngOnInit() {}
  otrasPartes(){
    if (this.musculoFuerte == ''){
      this.toastr.error(`Debe seleccionar un musculo`, 'Error')
      return
    }
    this.userService.setParteFuerte(this.musculoFuerte);
    this.toastr.success(`Datos recogidos correctamente`, 'Siguiente paso');
    this.route.navigate(['/otrasPartes'])
  }
  volver(){
    this.route.navigate(['/parteDesarrollo'])
  }
}
