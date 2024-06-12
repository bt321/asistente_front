import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-actualizardatos',
  templateUrl: './actualizardatos.component.html',
  styleUrl: './actualizardatos.component.css'
})
export class ActualizardatosComponent implements OnInit {
  constructor(private route : Router, private toastr : ToastrService, private rout: ActivatedRoute, private userService : UserService){}
  ngOnInit() { }

 

}
