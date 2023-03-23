import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/LoginRequest';
import { StaffService } from '../service/staff.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent {
  loginRequest: LoginRequest = new LoginRequest();

  constructor(private staffService: StaffService, private router: Router){}

  onSubmit(form: NgForm){
    if(form.valid){
      this.staffService.loginStaff(this.loginRequest)
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
        this.router.navigate(['/staff']);
      }, (error: any) =>{
        console.log("Error");
      });
    }
  }
}
