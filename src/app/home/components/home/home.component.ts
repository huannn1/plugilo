import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  isMenuActiveOnDesktop = true;
  isMenuActiveOnMobile = false;
  isQuickSidebarActive = false;
  isListContext = false;

  constructor(private router: Router) {
    
   }

  ngOnInit() {
    this.isListContext = this.router.url.indexOf('list') !== -1;
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
