import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { RemoveBeneficiaryComponent } from './remove-beneficiary/remove-beneficiary.component';
import { TransactionComponent } from './transaction/transaction.component';
import { StatementComponent } from './statement/statement.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    FooterComponent,
    CustomerRegistrationComponent,
    DashboardComponent,
    CreateAccountComponent,
    BeneficiaryComponent,
    RemoveBeneficiaryComponent,
    TransactionComponent,
    StatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
