import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prodcuts',
  templateUrl: './prodcuts.component.html',
  styleUrls: ['./prodcuts.component.css']
})
export class ProdcutsComponent {
  product: any;
  constructor(private http: HttpClient) { }
  ngOnInit(){
    const email = sessionStorage.getItem("userName");
    let response = this.http.get<any>("/product/"+ email);
    console.log(email);
    
    response.subscribe((data)=>this.product= data.data);

  }

}
