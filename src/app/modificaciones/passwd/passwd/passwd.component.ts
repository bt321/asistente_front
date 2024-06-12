import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PasswdService } from '../../../services/passwd.service';
import { HttpErrorResponse } from '@angular/common/http';
import { delay } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-passwd',
  templateUrl: './passwd.component.html',
  styleUrl: './passwd.component.css'
})
export class PasswdComponent implements OnInit {
  miFormulario: FormGroup;

  password_antigua: string ='';
  password_nueva: string ='';
  password_nueva2: string ='';

  constructor(private route : Router, private toastr: ToastrService, private passwdService : PasswdService){}

  ngOnInit() {
  }

  actualizar_passwd(){
    if(this.password_nueva != this.password_nueva2){
       this.toastr.error('Las contraseñas nuevas no coincides', 'Error');
       return
    }
    if(this.password_nueva == '' || this.password_nueva2 == ''){
      this.toastr.error('Todos los campos son obligatorio', 'Error');
       return
    }
    const datos={
      oldPaasswd: this.password_antigua,
      newPasswd: this.password_nueva
    }
    this.passwdService.updatePasswd(datos).subscribe({
      next: (token) => {
        this.toastr.success('Contraseña cambiada correctamente', 'Éxito')
        const rutaActual = this.route.url;
    
    // Navegar a la misma ruta para recargar el componente
      this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.route.navigate([rutaActual]);
      });
      },
      error: (e : HttpErrorResponse) =>{
        this.toastr.error(e.error.msg, 'Error')
        
      },
    })

  }

}
