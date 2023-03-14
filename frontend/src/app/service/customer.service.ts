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
}
