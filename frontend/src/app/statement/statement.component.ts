import { Component } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent {

  statement: any =[];
  

  constructor(){

    this.statement = [
      { "From": 123, "To": 456, "Amount": "$20.00" },
      { "From": 123, "To": 456, "Amount": "$80.00" },
      { "From": 321, "To": 123, "Amount": "$120.00" }
  ];
  }
}
