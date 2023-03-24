import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer, Status } from '../model/Customer';
import { LoginRequest } from '../model/LoginRequest';
import { CustomerService } from '../service/customer.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginRequest: LoginRequest = new LoginRequest();

  constructor(private userService: UserService, private customerService: CustomerService, private router: Router){}

  onSubmit(form: NgForm){
    if(form.valid){
      this.userService.loginCustomer(this.loginRequest)
      .subscribe((response: HttpResponse<any>) =>{
        const userId = response.body.id
        this.customerService.getCustomerById(userId)
        .subscribe((customerResponse: HttpResponse<Customer>) => {
          const customer = customerResponse.body;

          if(customer?.status === Status.ENABLE){
            localStorage.setItem('token', response.body.accessToken); // Save JWT token
            localStorage.setItem('userId', response.body.id.toString()); // Save user ID as string
            localStorage.setItem('username', response.body.username); // Save username
            localStorage.setItem('roles', response.body.roles);
            console.log("Logged in successfully!");
            console.log(localStorage.getItem('token'));
            console.log(localStorage.getItem('userId'));
            console.log(localStorage.getItem('username'));
            console.log(localStorage.getItem('roles'));
            this.router.navigate(['/dashboard']);
          } else{
            alert('Error logging in as customer. Your account is disabled.');
          }
        }, (error: any) =>{
          console.log("Error getting customer.");
          alert('Error logging in as customer. Check the credentials.');
        });
      }, (error: any) =>{
        console.log("Error");
        alert('Error logging in as customer. Check the credentials.');
      });
    }
  }
}