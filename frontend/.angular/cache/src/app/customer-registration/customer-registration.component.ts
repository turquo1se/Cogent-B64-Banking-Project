import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterRequest } from '../model/RegisterRequest';
import { UserService } from '../service/user.service';
import { passwordMatchValidator } from './password-match-validator';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit{
  registerForm!: FormGroup;
  request: RegisterRequest = new RegisterRequest();

  constructor(private _formBuilder:FormBuilder, private http: HttpClient, private _userService: UserService, private router: Router){};

  ngOnInit(): void{
    this.registerForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      confirmPassword: ['', [Validators.required, passwordMatchValidator]],
      secretQuestion: ['', Validators.required],
      secretAnswer: ['', Validators.required]
    })
  }

  showErrorMessage: boolean = false;
  showSuccessMessage: boolean = false;
  addCustomer(): void {
    if (this.registerForm.valid) {
      this._userService.registerCustomer(this.request).subscribe(
        (response: HttpResponse<any>) => {
          this.showErrorMessage = false;
          this.showSuccessMessage = true;
        },
        (error: any) => {
          this.showSuccessMessage = false;
          this.showErrorMessage = true;
        }
      );
    }
  }

  navigateToHome(){
    this.router.navigate(['/']);
  }

  get f(){
    return this.registerForm.controls;
  }
}
