import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../model/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }

  getAllAccounts(customerId: number, userId: number): Observable<HttpResponse<Account[]>> {
    const url = `http://localhost:9898/api/customer/${customerId}/account/${userId}`;

    return this.http.get<Account[]>(url, { observe: 'response'});
  }

  createAccount(customerId: number, body: any): Observable<HttpResponse<Account>>{
    const url = `http://localhost:9898/api/customer/${customerId}/account`;

    return this.http.post<Account>(url, body, { observe: 'response'});
  }
}
