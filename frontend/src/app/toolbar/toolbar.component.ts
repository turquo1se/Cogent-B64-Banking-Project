import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ERole } from '../model/Role';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private router: Router) {}

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  isCustomer() {
    return localStorage.getItem('roles') == ERole.ROLE_CUSTOMER;
  }

  isStaff(){
    return localStorage.getItem('roles') == ERole.ROLE_STAFF;
  }

  getUsername() {
    return localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    localStorage.removeItem('roles');
    this.router.navigate(['/']);
  }
}
