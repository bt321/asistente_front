import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswdService } from '../../services/passwd.service';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recuperarpasswd2',
  templateUrl: './recuperarpasswd2.component.html',
  styleUrl: './recuperarpasswd2.component.css'
})
export class Recuperarpasswd2Component  implements OnInit {
  miFormulario: FormGroup;
  token: string='';
  password_nueva: string ='';
  password_nueva2: string ='';

  constructor(private route : Router, private toastr: ToastrService, private passwdService : PasswdService, private http: HttpClient, private router: ActivatedRoute){}

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      const token = params['token'];
      console.log(token)
      this.token=token
    });
  }
  
  recuperarPasswd(){
    if(this.password_nueva != this.password_nueva2){
      this.toastr.error('Las contraseñas nuevas no coincides', 'Error');
      return
   }
   if(this.password_nueva == '' || this.password_nueva2 == ''){
     this.toastr.error('Todos los campos son obligatorio', 'Error');
      return
   }
   const datos={
     newPasswd: this.password_nueva,
     token: this.token
   }
    this.passwdService.updatePasswd2(datos).subscribe({
      next: (token) => {
        this.toastr.success('Contraseña cambiada correctamente', 'Éxito')
      this.route.navigate(['/inicio_sesion'])
      },
      error: (e : HttpErrorResponse) =>{
        this.toastr.error(e.error.msg, 'Error')
        
      },
    })

  }
  




}