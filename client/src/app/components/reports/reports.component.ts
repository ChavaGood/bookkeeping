import { Component } from '@angular/core';
import { RevenuesAndExpensesComponent } from '../revenues-and-expenses/revenues-and-expenses.component';
import { ByCustomerIdComponent } from '../by-customer-id/by-customer-id.component';
import { ExpenseService } from '../../../services/expense.service';
import { ReceiptService } from '../../../services/receipt.service';
import { Expense } from '../../../modules/expense';
import { Receipt } from '../../../modules/receipt';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../modules/customer';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RevenuesAndExpensesComponent,ByCustomerIdComponent,CommonModule,FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
// myYears=new Set<number>()
allCustomers=new Array<Customer>()
selectedOption:string='';
byYear:boolean=false;
betweenDates:boolean=false;
byCustomer:boolean=false;
byMonth:boolean=false;
myYear:number=0;
myMonth:number=0;
myYearMonth:number=0;
date1:Date=new Date();
date2:Date=new Date();
date1s:string='';
date2s:string='';
customerId:number=0;
bindDates:string='';


constructor(c:CustomerService){
c.getAll().subscribe(data=>this.allCustomers=data)
}
choseDate1(){
  const d=new Date(this.date1);
  this.date1s=`${d.getMonth()+1}.${d.getDate()}.${d.getFullYear()}`
}
choseDate2(){
  const d=new Date(this.date2);
  this.date2s=`${d.getMonth()+1}.${d.getDate()}.${d.getFullYear()}`
}
choseMonth(){  
  this.date1s=`${this.myMonth}.01.${this.myYearMonth}`
  if(this.myMonth==12)
    this.date2s=`01.01.${this.myYearMonth+1}`
  else
    this.date2s=`${this.myMonth+1}.01.${this.myYearMonth}`

}

// constructor(e:ExpenseService,r:ReceiptService){
//   // e.getAll().subscribe(data=>{
//   //   const expenses:Array<Expense>=data;
//   //   expenses.forEach(e => {
//   //     if (e.date instanceof Date) {
//   //       this.myYears.add(e.date.getFullYear());
//   //     }
//   //   });

//   // })
//   // r.getAll().subscribe(data=>{
//   //   const receipts:Array<Receipt>=data;
//   //   receipts.forEach(r => {
//   //     if (r.date instanceof Date) {
//   //       this.myYears.add(r.date.getFullYear());
//   //     }
//   //   });

//   // })
// }

choose(){  
  switch(this.selectedOption){
    case 'byyear':{this.byYear=true;
      break;
    }
    case 'bymonth':{this.bindDates=`${this.date1s},${this.date2s}`;
      this.byMonth=true;
      break;
    }case 'between':{this.bindDates=`${this.date1s},${this.date2s}`;
      this.betweenDates=true;
      break;
    }case 'customer':{this.byCustomer=true;
      break;
    }
  }
}
}
