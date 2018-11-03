import { Component, OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router,NavigationStart, NavigationEnd, Event } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {

  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  loginUser: string;

  constructor(private router: Router, private spinner: NgxSpinnerService,public authService: AuthService) { 
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.spinner.show();
      }
      if (routerEvent instanceof NavigationEnd) {
        this.spinner.hide();
      }
    });
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  ngOnInit() {
    this.loginUser = localStorage.getItem('token');
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
