import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../model/LoginRequest';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginRequest: LoginRequest = new LoginRequest();

  constructor(private userService: UserService, private router: Router){}

  onSubmit(form: NgForm){
    if(form.valid){
      this.userService.loginCustomer(this.loginRequest)
      .subscribe((response: HttpResponse<any>) =>{
        localStorage.setItem('token', response.body.accessToken); // Save JWT token
        localStorage.setItem('userId', response.body.id.toString()); // Save user ID as string
        console.log("Logged in successfully!");
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('userId'));
        this.router.navigate(['/dashboard']);
      }, (error: any) =>{
        console.log("Error");
      });
    }
  }
}