import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-ploan',
  templateUrl: './ploan.component.html',
  styleUrls: ['./ploan.component.css']
})
export class PloanComponent implements OnInit {
  loanData = new LoanData('', '', '', '', '', new Date(), '', '');
   constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string) {
   

  }

  ngOnInit() {
    
  }
  SubmitData() {
    console.log(this.loanData);
    let url: string = this.baseUrl + 'api/PLoan';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const headers = new HttpHeaders().set('content-type', 'application/json'); 
    let value = 'Angular POST Request Example';
    var body = {
      value: value
    }  
    this.http.post(url, this.loanData).subscribe({
      next: data => console.error('There was an data!', data),
      error: error => console.error('There was an error!', error)
    })
    //this.http.post(this.baseUrl +'api/PLoan', {}  ).subscribe(result => {
    //  console.log(result);

    //}, error => console.log(error));
  }

}
export class LoanData {

  constructor(
    
    public firstname: string,
    public secondname: string,
    public bankaccountno: string,
    public pinno: string,
    public ssn: string,
    public dob: Date,
    public phoneno: string,
    public email:string
  ) { }

}
