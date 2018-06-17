import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMenuActive = true;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
