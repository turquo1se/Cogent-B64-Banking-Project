import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { Customer, Status } from '../model/Customer';
import { AccountService } from '../service/account.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrls: ['./staff-view.component.css']
})

export class StaffViewComponent {
  account: Account | null = null;
  customers: Customer[] = [];
  showAccountDetails = true;

  constructor(private accountService: AccountService, private customerService: CustomerService) { }

  onGoButtonClick(accNumber: string): void {
    const accNumberInt = parseInt(accNumber);
    this.accountService.getAccount(accNumberInt).subscribe((response: HttpResponse<Account>) => {
      this.account = response.body;
    }, error => {
      console.error(error);
    });
  }

  onEnableOrBlockCustomerClick(): void {
    this.showAccountDetails = false;
    this.customerService.getCustomers().subscribe((response: HttpResponse<Customer[]>) => {
      this.customers = response.body ? response.body : [];  // null check
    }, error => {
      console.error(error);
    });
  }

  onToggleChange(customer: Customer) {
    const newStatus = customer.status === Status.ENABLE ? Status.DISABLE : Status.ENABLE;
    customer.status = newStatus;
    this.customerService.changeStatus(customer).subscribe(
      (response: HttpResponse<any>) => {
        console.log(response);
      },
      error => {
        console.error(error);
        // If the update fails, revert the status back to the previous value
        customer.status = customer.status === Status.ENABLE ? Status.DISABLE : Status.ENABLE;
      }
    );
  }
}
