import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})

export class CustomerProfileComponent {
  customerId: string = '12345';
  fullName: string = '';
  phone: string = '';
  pan: string = '';
  aadhar: string = '';
  panFile: File | null = null;
  aadharFile: File | null = null;

  onSubmit() {
    // Logic to update customer profile
  }

  onPanFileSelected(event: any) {
    this.panFile = event.target.files[0];
  }

  onAadharFileSelected(event: any) {
    this.aadharFile = event.target.files[0];
  }
}
