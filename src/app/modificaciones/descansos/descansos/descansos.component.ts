import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-descansos',
  templateUrl: './descansos.component.html',
  styleUrl: './descansos.component.css'
})
export class DescansosComponent implements OnInit {
  ngOnInit() {  }
  editMode = false;
  diasSeleccionados: string = ''
  Lunes: string = ''
  Martes: string = ''
  Miercoles: string = ''
  Jueves: string = ''
  Viernes: string = ''
  Sabado: string = ''
  Domingo: string = ''

  
  
  constructor(private route : Router, private userService: UserService,  private toastr: ToastrService){}

   diasSelec(){
     if(this.Lunes){
       //this.diasSeleccionados.push('Lunes');
       this.diasSeleccionados += 'Lunes, '
     }
     if(this.Martes){
       //this.diasSeleccionados.push('Martes');
       this.diasSeleccionados += 'Martes, '
     }
     if(this.Miercoles){
       //this.diasSeleccionados.push('Miercoles');
       this.diasSeleccionados += 'Miercoles, '
     }
     if(this.Jueves){
       //this.diasSeleccionados.push('Jueves');
       this.diasSeleccionados += 'Jueves, '
     }
     if(this.Viernes){
       //this.diasSeleccionados.push('Viernes');
       this.diasSeleccionados += 'Viernes, '
     }
     if(this.Sabado){
       //this.diasSeleccionados.push('Sabado');
       this.diasSeleccionados += 'Sabado, '
     }
     if(this.Domingo){
       //this.diasSeleccionados.push('Domingo');
       this.diasSeleccionados += 'Domingo, '
     }   
    }
    toggleEditMode() {
      this.editMode = !this.editMode;
    }
    descardChanges(){
      this.toggleEditMode();
      this.Lunes=''
      this.Martes=''
      this.Miercoles=''
      this.Jueves=''
      this.Viernes=''
      this.Sabado=''
      this.Domingo=''

    }
  
  actualizar_descanso(){
    this.diasSelec()
    this.diasSeleccionados = this.diasSeleccionados.slice(0, -2)
    console.log(`dias: ${this.diasSeleccionados}`)
    this.userService.updateDescansos(this.diasSeleccionados).subscribe(data =>{
      this.toastr.success(`Dias descanso actualizados correctamente`, 'Éxito')
      const rutaActual = this.route.url;
    
    // Navegar a la misma ruta para recargar el componente
      this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.route.navigate([rutaActual]);
      });
      
    }, (event : HttpErrorResponse) => {
      console.log(event.error.msg);
      this.toastr.error(event.error.msg, 'Error')
    })
    
  }

}
