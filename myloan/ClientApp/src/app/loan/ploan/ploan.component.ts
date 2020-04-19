import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ploan',
  templateUrl: './ploan.component.html',
  styleUrls: ['./ploan.component.css']
})
export class PloanComponent implements OnInit {
  public loanData: ILoanData;
  public name: string;
  public appname = "Test";
  constructor() {
    
    //this.loanData.firstname = "F";
    //this.loanData.secondname = "S";

  }

  ngOnInit() {
    this.name = 'Ajai';
  }
  SubmitData() {
    console.log(this.loanData);
  }
}
interface ILoanData {
  firstname: string;
  secondname: string;
  bankaccount: string;
  ssno: string;
  dob: Date;
  phoneno: string;
  emailid: string;
  }

