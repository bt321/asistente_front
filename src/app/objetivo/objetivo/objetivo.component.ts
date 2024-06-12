import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Objetivo } from '../../interfaces/objetivo';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.component.html',
  styleUrl: './objetivo.component.css'
})
export class ObjetivoComponent implements OnInit {
  peso_objetivo: number;
  peso_actual: number;
  tipo_objetivo: string='';
  constructor(private route : Router, private userService: UserService,  private toastr: ToastrService){}
  ngOnInit() {}
  descanso(){
    if(this.peso_objetivo==null || this.peso_actual==null || this.tipo_objetivo==''){
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }
    if(this.peso_objetivo<=0 || this.peso_actual<=0){
      this.toastr.error('Los pesos no pueden ser negativos ni cero', 'Error');
      return;
    }
    const objetivo: Objetivo = {
      tipo_objetivo: this.tipo_objetivo,
      peso_actual: this.peso_actual,
      peso_objetivo: this.peso_objetivo
    }

    this.userService.setObjetivo(objetivo);
    this.toastr.success(`Datos recogidos correctamente`, 'Siguiente paso')
    this.route.navigate(['/descanso']);

  }
}
