import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isMenuActiveOnDesktop = true;
  isMenuActiveOnMobile = false;
  isQuickSidebarActive = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    const isMobile = window.innerWidth <= 992;
    if (isMobile) {
      this.isMenuActiveOnMobile = !this.isMenuActiveOnMobile;
    } else {
      this.isMenuActiveOnDesktop = !this.isMenuActiveOnDesktop;
    }
  }

  toggleQuickSidebar() {
    this.isQuickSidebarActive = !this.isQuickSidebarActive;
  }
}
