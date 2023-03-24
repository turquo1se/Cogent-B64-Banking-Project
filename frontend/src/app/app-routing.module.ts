import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffViewComponent } from './staff-view/staff-view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer-registration', component: CustomerRegistrationComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'customer-profile', component: CustomerProfileComponent},
  {path: 'staff-login', component: StaffLoginComponent},
  {path: 'staff', component: StaffViewComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin', component: AdminViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
