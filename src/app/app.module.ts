import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { RouterModule, Routes } from '@angular/router';
import { ProdcutsComponent } from './prodcuts/prodcuts.component';
import { TranferenciaComponent } from './tranferencia/tranferencia.component';

const routes: Routes = [
  {
    path:'prduct/create',
    component:CreateProductComponent
  }
  ,
  {
    path:'transaction',
    component:MakeTransactionComponent
  }
  ,
  {
    path:'person/create',
    component:CreatePersonComponent
  },
  {
    path:'product/list',
    component:ProdcutsComponent
  },
  {
    path:'tranferencia',
    component: TranferenciaComponent

  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePersonComponent,
    CreateProductComponent,
    MakeTransactionComponent,
    ProdcutsComponent,
    TranferenciaComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
