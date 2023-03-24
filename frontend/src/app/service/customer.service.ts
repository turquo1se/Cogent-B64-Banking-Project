import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getCustomerById(userId: number): Observable<HttpResponse<Customer>> {
    const url = `http://localhost:9898/api/customer/${userId}`;

    return this.http.get<Customer>(url, { observe: 'response'});
  }

  getCustomer(customerId: number): Observable<HttpResponse<Customer>> {
    const url = `http://localhost:9898/api/customer/customerId/${customerId}`;

    return this.http.get<Customer>(url, { observe: 'response'});
  }

  updateCustomer(customer: Customer): Observable<HttpResponse<any>> {
    const url = `http://localhost:9898/api/customer/${customer.customerId}`;
    return this.http.put(url, customer, { observe: 'response' });
  }

  changeStatus(customer: Customer): Observable<HttpResponse<any>>{
    const url = `http://localhost:9898/api/staff/change-status`;
    return this.http.put(url, customer, { observe: 'response' });
  }

  getCustomers(): Observable<HttpResponse<Customer[]>>{
    const url = `http://localhost:9898/api/staff/customers`;

    return this.http.get<Customer[]>(url, { observe: 'response' });
  }
}
