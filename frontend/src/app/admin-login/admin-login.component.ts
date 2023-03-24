import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/LoginRequest';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  loginRequest: LoginRequest = new LoginRequest();

  constructor(private adminService: AdminService, private router: Router){}

  onSubmit(form: NgForm){
    if(form.valid){
      this.adminService.loginAdmin(this.loginRequest)
      .subscribe((response: HttpResponse<any>) =>{
        localStorage.setItem('token', response.body.accessToken); // Save JWT token
        localStorage.setItem('userId', response.body.id.toString()); // Save user ID as string
        localStorage.setItem('username', response.body.username); // Save username
        localStorage.setItem('roles', response.body.roles);
        console.log("Logged in successfully!");
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('userId'));
        console.log(localStorage.getItem('username'));
        console.log(localStorage.getItem('roles'));
        this.router.navigate(['/admin']);
      }, (error: any) =>{
        console.log("Error");
        alert('Error logging in as administrator. Check the credentials.');
      });
    }
  }
}
