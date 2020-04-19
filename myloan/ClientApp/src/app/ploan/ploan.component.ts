import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ploan',
  templateUrl: './ploan.component.html',
  styleUrls: ['./ploan.component.css']
})
export class PloanComponent implements OnInit {
  //loanData: ILoanData;
  firtname: string;
  secondname: string;
  bankaccount: string;
  ssno: string;
  dob: Date;
  phoneno: string;
  emailid: string;
  constructor() {

  }

  ngOnInit() {
    //this.loanData.firstname = '';
    //this.loanData.firstname = "FName";
  }
  SubmitData() {
    console.log(this.firtname);
  }

}
//interface ILoanData {
//  firstname: string;
//  secondname: string;
//  bankaccount: string;
//  ssno: string;
//  dob: Date;
//  phoneno: string;
//  emailid: string;
//}

