import { Component, OnInit } from '@angular/core';
declare const eyes_movement:any;
import * as $ from "jquery";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  public mouse_move(){
    eyes_movement();
  }
}
