import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

export interface Person{
  idType: string;
  idNumber: Number;
  name:string;
  lastName:string;
  email:string;
  birthDay:string;
}

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit{
  person! : FormGroup;
  message :any;

  ngOnInit() {
    this.person = new FormGroup({
      idType : new FormControl(""),
      idNumber: new FormControl(0),
      name: new FormControl(""),
      lastName : new FormControl(""),
      email: new FormControl(""),
      birthDay: new FormControl

    });
  }
  constructor(private http:HttpClient){}
  subtmit(person1: any){
    var body= {idType:"",idNumber:0, name:"", lastName:"", email:"", birthDay:""};
    body.idType = this.person.get("idType")?.value;
    body.idNumber = this.person.get("idNumber")?.value;
    body.lastName = this.person.get("lastName")?.value;
    body.name = this.person.get("name")?.value;
    body.email = this.person.get("email")?.value;
    body.birthDay = this.person.get("birthDay")?.value;



    let response = this.http.post<any>('/client',body);
    response.subscribe((data) => {
      this.message = data.message;
      console.log(data)});
    console.log(body);
    sessionStorage.setItem("userName",this.person.get("email")?.value);
  }

}
