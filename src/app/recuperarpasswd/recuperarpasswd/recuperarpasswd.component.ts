import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswdService } from '../../services/passwd.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recuperarpasswd',
  templateUrl: './recuperarpasswd.component.html',
  styleUrl: './recuperarpasswd.component.css'
})
export class RecuperarpasswdComponent implements OnInit {
  email: string = '';
  username: string = '';
  constructor(private route : Router, private passwordService : PasswdService, private toastr: ToastrService){}
  ngOnInit() {  }
  

  recoverPassword() {
    const datos={
      username: this.username,
      email: this.email
    }
    console.log(datos)
    this.passwordService.recuperarPasswd(datos).subscribe(data=>{
      console.log(data)
    })
    this.toastr.success('Se ha enviado un correo de recuperación')
    this.route.navigate(['/inicio_sesion'])
  }


}
