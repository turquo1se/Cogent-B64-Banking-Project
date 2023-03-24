import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})

export class CustomerProfileComponent implements OnInit{
  
  customerId: number = 0;
  fullName: string = '';
  phone: string = '';
  pan: string = '';
  aadhar: string = '';
  customer!: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.customerService.getCustomerById(+userId).subscribe((response: HttpResponse<Customer>) => {
        if (response.body !== null) {
          this.customer = response.body;
          this.customerId = response.body.customerId;
          this.fullName = response.body.fullname;
          this.phone = response.body.phone;
          this.pan = response.body.pan;
          this.aadhar = response.body.aadhar;
        }
      });
    }
  }

  onSubmit(form: NgForm) {
    const updatedCustomer: Customer = {
      customerId: this.customerId,
      user: this.customer.user,
      fullname: form.value.fullname,
      phone: form.value.phone,
      pan: form.value.pan,
      aadhar: form.value.aadhar,
      secretQuestion: this.customer.secretQuestion,
      secretAnswer: this.customer.secretAnswer,
      status: this.customer.status
    };
    this.customerService.updateCustomer(updatedCustomer).subscribe((response: HttpResponse<any>) => {
      console.log(response);
      alert('Profile updated successfully!');
    }, (error) => {
      console.log(error);
      alert('Error updating profile. Please try again later.');
    });
  }
}
