import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddBeneficiaryRequest } from '../model/AddBeneficiaryRequest';
import { UserService } from '../service/user.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {
  beneficiaryForm: any;
  request: AddBeneficiaryRequest = new AddBeneficiaryRequest();
  submitted: boolean = false;

  constructor(private _formBuilder:FormBuilder, private http: HttpClient, private _userService: UserService, private router: Router){};

  ngOnInit(): void {
    this.beneficiaryForm = this._formBuilder.group({
      accountNumber1: ['', [Validators.required]],
      accountType: ['', [Validators.required]]
    })
  }

  showErrorMessage: boolean = false;
  showSuccessMessage: boolean = false;

  addBeneficiary(): void {
    this.submitted=true;
    if(this.beneficiaryForm.valid) {
      
      this._userService.addBeneficiary(this.request).subscribe();
    }
  }
  

}
