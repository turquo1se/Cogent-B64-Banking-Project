import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../model/LoginRequest';
import { RegisterRequest } from '../model/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) { }

  registerStaff(req: RegisterRequest): Observable<HttpResponse<any>> {
    return this.http.post('http://localhost:9898/api/staff/register', req, { observe: 'response' });
  }

  loginStaff(req: LoginRequest): Observable<HttpResponse<any>>{
    return this.http.post('http://localhost:9898/api/staff/authenticate', req, {observe: 'response'});
  }
}
