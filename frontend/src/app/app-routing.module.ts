import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer-registration', component: CustomerRegistrationComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'beneficiary', component: BeneficiaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
