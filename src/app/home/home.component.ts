import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user_age = 30;
  public car_remain = ['Toyota','Vinfast','Mustang','Ferrari','Volvo'];
  constructor() { }

  ngOnInit(): void {
  }

}
