
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../modules/expense';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiUrl = 'http://127.0.0.1:4300/expense'; 
  constructor(private http: HttpClient) {}

  addExpense(expense:Expense): Observable<Expense>  {
   return  this.http.post<Expense>(this.apiUrl+'/add', expense,{headers:{'content-type':'application/json'}})
      
  }
  getAll(): Observable<Array<Expense>>  {
    return  this.http.get<Array<Expense>>(this.apiUrl+'/all')
       
   }
   getById(id:Number): Observable<Array<Expense>>  {
    return  this.http.get<Array<Expense>>(this.apiUrl+'/one'+id)
       
   }
   getOneYear(year:Number): Observable<Array<Expense>>  {
    return  this.http.get<Array<Expense>>(this.apiUrl+`/forYear/${year}`)
       
   }getBetweenDates(dates:string): Observable<Array<Expense>>  {
    console.log({dates});
    
    return  this.http.get<Array<Expense>>(this.apiUrl+'/between/'+dates)
       
   }

}
