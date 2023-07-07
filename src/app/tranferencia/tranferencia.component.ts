import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tranferencia',
  templateUrl: './tranferencia.component.html',
  styleUrls: ['./tranferencia.component.css']
})
export class TranferenciaComponent implements OnInit {
  transaction! : FormGroup
  message:any;

  ngOnInit(): void {
    this.transaction = new FormGroup({
      transaccionType : new FormControl(""),
      monto : new FormControl(0),
      accounId : new FormControl(""),
      accountIdEmisor: new FormControl("")
    });
    
  }
  constructor(private http:HttpClient){}

  submit(transaction: any){
    var body = {transaccionType:"", monto:0, accountId:""};
    body.accountId = this.transaction.get("accountIdEmisor")?.value;
    body.monto = this.transaction.get("monto")?.value;
    body.transaccionType = this.transaction.get("transaccionType")?.value;
    var accountIdN= transaction.get('accounId')?.value;
    let response = this.http.post<any>('/transaction/transferencia/'+accountIdN,body);
    response.subscribe((data)=> console.log(data));
  }

}
