import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
export interface Transaction{
  transaccionType: string;
  monto:number;
}
@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css']
})
export class MakeTransactionComponent implements OnInit{
  transaction! : FormGroup
  message:any;

  ngOnInit(): void {
    this.transaction = new FormGroup({
      transaccionType : new FormControl(""),
      monto : new FormControl(0)
    });
    console.log(sessionStorage.getItem("accountId"));
    
  }
  constructor(private http:HttpClient){}

  submit(transaction: any){
    var body = {transaccionType:"", monto:0, accountId:sessionStorage.getItem("accountId")};
    body.accountId = sessionStorage.getItem("accountId");
    body.monto = this.transaction.get("monto")?.value;
    body.transaccionType = this.transaction.get("transaccionType")?.value;

    let response = this.http.post<any>('/transaction/make',body);
    response.subscribe((data)=> console.log(data));

  }

}
