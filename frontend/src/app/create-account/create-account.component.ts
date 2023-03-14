import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { Customer } from '../model/Customer';
import { AccountService } from '../service/account.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  userId: number = 0;
  customerId: number = 0;
  initialDeposit: number = 0;
  accountType: string = 'Savings Account';

  constructor(private accountService: AccountService, private customerService: CustomerService){}

  onSubmit(): void{
    this.userId = Number(localStorage.getItem('userId'));
    this.customerService.getCustomerById(this.userId).subscribe(
      (response: HttpResponse<Customer>) => {
        this.customerId = response?.body?.customerId ?? 0;
        
        const account = {
          accBalance: this.initialDeposit,
          accType: this.accountType,
        };

        console.log(account);

        this.accountService.createAccount(this.customerId, account).subscribe(
          (response: HttpResponse<Account>) =>{
            console.log("Account created succesfully:", response.body)
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
