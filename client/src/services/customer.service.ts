
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from '../modules/customer'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://127.0.0.1:4300/customer'; 
  constructor(private http: HttpClient) {}

  addCustomer(customer:Customer): Observable<Customer>  {
   return  this.http.post<Customer>(this.apiUrl+'/add', customer,{headers:{'content-type':'application/json'}})
      
  }
  getAll(): Observable<Array<Customer>>  {
    return  this.http.get<Array<Customer>>(this.apiUrl+'/all')
       
   }
   getById(id:Number): Observable<Customer>  {
    return  this.http.get<Customer>(this.apiUrl+'/one/'+id)
       
   }

}
