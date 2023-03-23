import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { RemoveBeneficiaryComponent } from './remove-beneficiary/remove-beneficiary.component';
import { TransactionComponent } from './transaction/transaction.component';
import { StatementComponent } from './statement/statement.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer-registration', component: CustomerRegistrationComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'beneficiary', component: BeneficiaryComponent},
  {path: 'remove-beneficiary', component: RemoveBeneficiaryComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'statement', component: StatementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
