import { Component } from '@angular/core';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-remove-beneficiary',
  templateUrl: './remove-beneficiary.component.html',
  styleUrls: ['./remove-beneficiary.component.css']
})
export class RemoveBeneficiaryComponent {

  beneficiaryList: any =[];
  

  constructor(private _userService: UserService){
    this.beneficiaryList = [
      { "acctNum": 0, "acctName": "Harry" },
      { "acctNum": 1, "acctName": "Harry" },
      { "acctNum": 2, "acctName": "Harry" }
  ];
  }
  deleteItem(index: number): void {
    if (index > -1) {
      this.beneficiaryList.splice(index, 1);
    }
  }



}
