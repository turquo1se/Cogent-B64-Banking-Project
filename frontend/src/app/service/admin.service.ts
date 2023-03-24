import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../model/LoginRequest';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  loginAdmin(req: LoginRequest): Observable<HttpResponse<any>>{
    return this.http.post('http://localhost:9898/api/admin/authenticate', req, {observe: 'response'});
  }
}
