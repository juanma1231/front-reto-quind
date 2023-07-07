import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
export interface Product{
  accountType:string;
  balance:number;
  availableBalance:number;
  idClient:number;
}
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit{

  product! : FormGroup;
  message:any;
  ngOnInit(){
    this.product = new FormGroup({
      accountType : new FormControl(""),
      balance: new FormControl(0),
      availableBalance: new FormControl(0)
    }); 
  }
  constructor(private http:HttpClient){}
  submit(product1:any){
    var body = {accountType:"", balance:0, availableBalance:0, idClient: sessionStorage.getItem("userName")};
    body.accountType = this.product.get("accountType")?.value;
    body.balance = this.product.get("balance")?.value;
    body.availableBalance = this.product.get("availableBalance")?.value;
    body.idClient = sessionStorage.getItem("userName"); 
    
    let response = this.http.post<any>('/product/create',body);
    response.subscribe((date)=> console.log(date));
  }

}
