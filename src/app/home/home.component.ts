import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user_name = ''
  public user_age = 29;
  public car_remain = ['Toyota','Vinfast','Mustang','Ferrari','Volvo'];
  constructor() { }

  ngOnInit(): void {
  }

  public increase_Age() {
    this.user_age++;
    if(this.user_age >=30){
      this.user_name='Old man';
    }
  } 
}