import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { Customer } from '../model/Customer';
import { AccountService } from '../service/account.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userId: number = 0;
  customerId: number = 0;
  accounts: Account[] | null=null;

  constructor(private accountService: AccountService, private customerService: CustomerService) {}

  ngOnInit(): void{
    // Get user id from local storage
    console.log("In Dashboard Component")
    this.userId = Number(localStorage.getItem('userId'));
    console.log("User ID:", this.userId);

    // Call customer service to get the customer id
    this.customerService.getCustomerById(this.userId).subscribe(
      (response: HttpResponse<Customer>) => {
        this.customerId = response?.body?.customerId ?? 0;
        console.log("Customer ID:", this.customerId);

        // Call account service to get all accounts for the user
        this.accountService.getAllAccounts(this.customerId, this.userId).subscribe(
          (response) => {
            this.accounts = response.body;
            console.log("Accounts:", this.accounts);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
