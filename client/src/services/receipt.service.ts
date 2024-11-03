
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receipt } from '../modules/receipt';
@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private apiUrl = 'http://127.0.0.1:4300/receipt'; 
  constructor(private http: HttpClient) {}

  addReceipt(receipt:Receipt): Observable<Receipt>  {
   return  this.http.post<Receipt>(this.apiUrl+'/add', receipt,{headers:{'content-type':'application/json'}})
      
  }
  getAll(): Observable<Array<Receipt>>  {
    return  this.http.get<Array<Receipt>>(this.apiUrl+'/all')
       
   }
   getById(id:Number): Observable<Array<Receipt>>  {
    return  this.http.get<Array<Receipt>>(this.apiUrl+'/one/'+id)
       
   }
   getOneYear(year:Number): Observable<Array<Receipt>>  {
    return  this.http.get<Array<Receipt>>(this.apiUrl+'/forYear/'+year)
       
   }getBetweenDates(dates:string): Observable<Array<Receipt>>  {
    return  this.http.get<Array<Receipt>>(this.apiUrl+'/between/'+dates)
       
   }

}
