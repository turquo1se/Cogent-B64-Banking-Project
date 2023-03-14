import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../model/LoginRequest';
import { RegisterRequest } from '../model/RegisterRequest';
import { AddBeneficiaryRequest } from 'app/model/AddBeneficiaryRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registerCustomer(req: RegisterRequest): Observable<HttpResponse<any>> {
    return this.http.post('http://localhost:9898/api/customer/register', req, { observe: 'response' });
  }

  loginCustomer(req: LoginRequest): Observable<HttpResponse<any>>{
    return this.http.post('http://localhost:9898/api/customer/authenticate', req, {observe: 'response'});
  }

  addBeneficiary(req: AddBeneficiaryRequest): Observable<HttpResponse<any>>{
    return this.http.post('TO DO', req, {observe: 'response'});
  }


}
