import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../customer-registration/password-match-validator';
import { RegisterRequest } from '../model/RegisterRequest';
import { Staff } from '../model/Staff';
import { AdminService } from '../service/admin.service';
import { StaffService } from '../service/staff.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit{
  registerForm!: FormGroup;
  request: RegisterRequest = new RegisterRequest();
  showStaffRegistration: boolean = true;
  staff: Staff[] = [];

  constructor(private _formBuilder:FormBuilder, private http: HttpClient, private _staffService: StaffService, private router: Router){};

  ngOnInit(): void{
    this.registerForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      fullname: ['', Validators.required],
      confirmPassword: ['', [Validators.required, passwordMatchValidator]]
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  showErrorMessage: boolean = false;
  showSuccessMessage: boolean = false;
  addStaff(): void {
    if (this.registerForm.valid) {
      this._staffService.registerStaff(this.request).subscribe(
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

  onViewStaffClick(): void {
    this.showStaffRegistration = false;
    this._staffService.getStaff().subscribe((response: HttpResponse<Staff[]>) => {
      this.staff = response.body ? response.body : [];  // null check
    }, error => {
      console.error(error);
    });
  }
}
