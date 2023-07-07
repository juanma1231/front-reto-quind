import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
export interface Transaction{
  transaccionType: string;
  monto:number;
  accounId:string;
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
      monto : new FormControl(0),
      accounId : new FormControl(0)
    });
    
  }
  constructor(private http:HttpClient){}

  submit(transaction: any){
    var body = {transaccionType:"", monto:0, accountId:""};
    body.accountId = this.transaction.get("accounId")?.value;
    body.monto = this.transaction.get("monto")?.value;
    body.transaccionType = this.transaction.get("transaccionType")?.value;

    let response = this.http.post<any>('/transaction/make',body);
    response.subscribe((data)=> console.log(data));

  }

}
