import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.component.html',
  styleUrl: './objetivo.component.css'
})
export class ObjetivoComponent implements OnInit {
  constructor(private route : Router){}
  ngOnInit() {}
  descanso(){
    this.route.navigate(['/descanso'])
  }

}
