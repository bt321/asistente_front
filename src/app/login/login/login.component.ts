import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: any;
  password1: any;
  
  constructor(private route : Router, private dataService : DataService){}
  ngOnInit() { }

  menu(){
    const data = {'username':this.username, 'password': this.password1};
    this.dataService.login(data)
    this.route.navigate(['/menu'])
  }
}
